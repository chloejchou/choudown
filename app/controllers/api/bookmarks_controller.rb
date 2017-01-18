class Api::BookmarksController < ApplicationController
  def index
    bookmarks = Bookmark.all.where('user_id = ?', params[:user_id])
    @businesses = []
    bookmarks.each do |bookmark|
      @businesses << bookmark.business
    end

    render :index
  end

  def create
    Bookmark.create!(user_id: current_user.id, business_id: params[:business_id])
  end

  def destroy
    bookmark = Bookmark.find_by(user_id: current_user.id, business_id: params[:business_id])
    bookmark.destroy!
  end
end
