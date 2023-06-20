Rails.application.routes.draw do
  post 'api/test', to: 'application#test'
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resources :businesses, only: %i[index update show]
    resources :reviews
    resources :tags, only: :index
    resource :session, only: %i[show create destroy]
  end
  # get '/reviews/:review_id/photo', to: 'reviews#photo', as: 'reviews_photo'
  # Catch-all route for unknown routes
  get '*path', to: 'static_pages#frontend', constraints: ->(request){ request.format.html? } #Heroku Deployment 6/20/2023
  root to: 'static_pages#frontend'

end
