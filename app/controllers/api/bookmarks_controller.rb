class Api::BookmarksController < ApplicationController
  def index
    bookmarks = Bookmark.all.where('user_id = ?', params[:user_id])
    @businesses = []
    bookmarks.each do |bookmark|
      @businesses << bookmark.business
    end

    render :index
  end
end
