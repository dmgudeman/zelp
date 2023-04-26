class Api::BusinessesController < ApplicationController
  wrap_parameters include: Business.attribute_names

  def index
    @businesses = Business.all
  end

  def show 
    @business = Business.find(params[:id])
    render show
  end

  private

  def business_params
    params.require(:business).permit(:name, :address, :phone, :email, :website, :cost, :lat, :lng)
  end
end
