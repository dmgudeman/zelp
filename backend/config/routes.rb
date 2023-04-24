Rails.application.routes.draw do

  post 'api/test', to: 'application#test'
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resources :businesses, only: :index
    resource :session, only: %i[show create destroy]
  end
  get '*path', to: "static_pages#frontend_index"
end
