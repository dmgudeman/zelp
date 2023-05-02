class Api::BusinessesController < ApplicationController
  wrap_parameters include: Business.attribute_names + [:images]

  def index
    if params[:tag].present?
      @businesses = Business.joins(:tags).where(tags: { tag: params[:tag] })
    else
      @businesses = Business.all
    end
  end

  def show 
    @business = Business.find(params[:id])
    @reviews = @business.reviews
    # debugger
    # render show
  end

  private

  def business_params
    params.require(:business).permit(:name, :reviews, :address, :phone, :website, :cost, :latlng, :hours,  images: [])
  end
end
