class Api::BusinessesController < ApplicationController
  def index
    input_tag = params[:tag].split(' ').map(&:capitalize).join(' ')
    tags = Tag.all.where('name LIKE ?', "%#{input_tag}%")
    taggings = []
    tags.each do |tag|
      taggings += tag.taggings
    end

    @businesses = []
    taggings.each do |tagging|
      @businesses << tagging.business
    end

    if params[:price]
      price_array = params[:price].split(',');
      @businesses = @businesses.select do |business|
        price_array.include?(business.price)
      end
    end

    render :index
  end

  def show
    @business = Business.find(params[:id])
    render :show
  end
end
