class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.business_id = params[:business_id]
    @review.user_id = current_user.id

    if @review.save
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

  def review_params
    params.require(:review).permit(:review_text, :rating)
  end
end
