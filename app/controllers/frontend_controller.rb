# app/controllers/frontend_controller.rb
class FrontendController < ActionController::Base
  def index
    render file: 'frontend/public/index.html'
  end
end
