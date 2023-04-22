Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: %i[show create destroy]
  end
end
