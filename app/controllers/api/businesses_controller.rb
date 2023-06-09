class Api::BusinessesController < ApplicationController
  wrap_parameters include: Business.attribute_names + %i[bus add tag images]

  def index
    @businesses = if params[:tag].present?
                    Business.joins(:tags).where(tags: { tag: params[:tag] })
                  else
                    Business.all
                  end

     if params[:bus]
    @businesses = @businesses.where('name LIKE ?', "%#{params[:bus]}%") 
     end

if params[:add]
    @businesses = @businesses.where('address LIKE ?', "%#{params[:add]}%")
end
  end

  def show
    @business = Business.find(params[:id])
    # @reviews = @business.reviews
    @reviews = @business.reviews.order(created_at: :desc)
    @tags = @business.tags
  end

  private

  def business_params
    params.require(:business).permit(:name, :reviews, :address, :phone, :website, :cost, :latlng, :hours, :bus, :add,
                                     :tag, images: [])
  end
end
