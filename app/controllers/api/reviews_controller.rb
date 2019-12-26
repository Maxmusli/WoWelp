class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = current_user.reviews.new(review_params)

    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  def edit
    @review = Review.find(params[:id])
  end

  def update
    @review = current_user.reviews.find(params[:id])

    if @review.update
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :business_id)
  end
end
