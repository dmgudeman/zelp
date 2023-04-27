class Api::ReviewsController < ApplicationController
  wrap_parameters include: Review.attribute_names + [:photo]

  def index
    @reviews = Review.all.sort { |a, b| b.created_at <=> a.created_at }
  end

  def show
    @review = Review.find(params[:id])
    render show
  end

  def create
    @review = Review.new(review_params)

    if @review.save!
      render partial: 'api/reviews/review', locals: {review: @review}
    else
      render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update; end

  def destroy; end

  private

  def review_params
    params.require(:review).permit(:author_id, :business_id, :rating, :body, :photo)
  end
end
