class Api::TagsController < ApplicationController
  wrap_parameters include: Tag.attribute_names

  def index
    @tags = Tag.all
   
  end

  private

  def tag_params
    params.require(:tag).permit(:tag)
  end
end
