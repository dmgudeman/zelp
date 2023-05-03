class Api::BusinessesController < ApplicationController
  wrap_parameters include: Business.attribute_names + [:images]

  def index
    @businesses = if params[:tag].present?
                    Business.joins(:tags).where(tags: { tag: params[:tag] })
                  else
                    Business.all
                  end
  end

  def show
    @business = Business.find(params[:id])
    @reviews = @business.reviews
    @tags = @business.tags
  end

  private

  def business_params
    params.require(:business).permit(:name, :reviews, :address, :phone, :website, :cost, :latlng, :hours, images: [])
  end
end
