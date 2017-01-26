class Api::BusinessesController < ApplicationController
  def index
    # input_tag = params[:tag].split(' ').map(&:capitalize).join(' ')
    input_tag = params[:tag].downcase
    tags = Tag.all.where('lower(name) LIKE ?', "%#{input_tag}%")
    taggings = []
    tags.each do |tag|
      taggings += tag.taggings
    end

    @businesses = []
    taggings.each do |tagging|
      @businesses << tagging.business
    end


    if params[:price]
      price_array = params[:price].split(',')
      @businesses = @businesses.select do |business|
        price_array.include?(business.price)
      end
    end

    first_business = (params[:page].to_i - 1) * 10
    last_business = first_business + 9
    @businesses = @businesses[first_business..last_business]

    render :index
  end

  def show
    @business = Business.find(params[:id])
    render :show
  end

  def featured
    @business = Business.find(params[:id])
    render :show
  end

end
