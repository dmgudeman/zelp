class Api::BusinessesController < ApplicationController
  wrap_parameters include: Business.attribute_names + %i[bus add tag images]

  def index
    @businesses = if params[:tag].present?
                    Business.joins(:tags).where(tags: { tag: params[:tag] })
                  else
                    Business.all
                  end
    @businesses = @businesses.where('name LIKE ?', "%#{params[:bus]}%") if params[:bus]
    return unless params[:add]
    @businesses = @businesses.where('address LIKE ?', "%#{params[:add]}%")
  end

  def show
    @business = Business.find(params[:id])
    @reviews = @business.reviews.order(created_at: :desc)
    @tags = @business.tags
  end
  def update
    @business = Business.find(params[:id])
    if @business.update(business_params)
      render json: @business
    else
      render json: @business.errors, status: :unprocessable_entity
    end
  end

  private

  def business_params
    params.require(:business).permit(:name, :reviews, :address, :phone, :website, :cost, :rating, :latlng, :hours, :bus, :add,
                                     :tag, images: [])
  end
end
