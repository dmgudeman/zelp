class Api::ReviewsController < ApplicationController
  wrap_parameters :review, include: Review.attribute_names + [:photo]

  def index
    @reviews = Review.order(created_at: :desc)
  end

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    review = Review.find(params[:id])

    begin
      review.destroy!
      render json: { message: 'Review deleted successfully' }, status: :ok
    rescue StandardError => e
      render json: review.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:author_id, :business_id, :rating, :body, :photo)
  end
end
