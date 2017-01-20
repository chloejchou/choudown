class Api::TagsController < ApplicationController
  def index
    tag = params[:name].capitalize
    @tags = Tag.all.where('name LIKE ?', "%#{tag}%")
    @tags = @tags[0..6]
    render :index
  end
end
