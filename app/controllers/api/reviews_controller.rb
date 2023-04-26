class Api::ReviewsController < ApplicationController
  wrap_parameters include: Review.attribute_names

  def index
    @reviews = Review.all
  end

  def show
    @review = Review.find(params[:id])
    render show
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      # render 'api/reviews'
      render :show
    else
      render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
  end

  def destroy
  end

  private

  def review_params
    params.require(:review).permit(:author_id, :business_id, :rating, :body)
  end
end
