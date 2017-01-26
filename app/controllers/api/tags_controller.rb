class Api::TagsController < ApplicationController
  def index
    # tag = params[:name].split(' ').map(&:capitalize).join(' ')
    tag = params[:name].downcase
    @tags = Tag.all.where('lower(name) LIKE ?', "%#{tag}%")
    @tags = @tags[0..6]
    render :index
  end
end
