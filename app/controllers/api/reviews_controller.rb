class Api::ReviewsController < ApplicationController

  def create
    # debugger
    @review = Review.new(review_params)
    @review.business_id = params[:business_id]
    @review.user_id = current_user.id

    if @review.save
      photo_params[:photos].each do |url|
        if url != ""
          Photo.create(
            url: url,
            user_id: current_user.id,
            business_id: params[:business_id],
            review_id: @review.id
          )
        end
      end
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    business = Business.find(params[:business_id])
    @reviews = business.reviews
    render :index
  end

  def show
    @review = Review.find_by(business_id: params[:business_id], id: params[:id])
    render :show
  end

  def destroy
    @review = Review.find(params[:id])
    puts "hello"
    @review.destroy
    render :show
  end

  def profile_reviews
    @reviews = Review.all.where('user_id = ?', params[:user_id])
    render :index
  end

  def review_params
    params.require(:review).permit(:review_text, :rating)
  end

  def photo_params
    params.require(:review).permit(photos: [])
  end

end
