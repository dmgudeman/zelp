class Api::BusinessesController < ApplicationController
  wrap_parameters include: Business.attribute_names 

  def index
    @businesses = Business.all
  end

  def show 
    @business = Business.find(params[:id])
    @reviews = @business.reviews
    # debugger
    # render show
  end

  private

  def business_params
    params.require(:business).permit(:name, :reviews, :address, :phone, :email, :website, :cost, :lat, :lng, images: [])
  end
end
