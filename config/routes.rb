Rails.application.routes.draw do
  post 'api/test', to: 'application#test'
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resources :businesses, only: %i[index show]
    resources :reviews
    resources :tags, only: :index
    resource :session, only: %i[show create destroy]
  end
  # get '/reviews/:review_id/photo', to: 'reviews#photo', as: 'reviews_photo'
  get '*path', to: 'static_pages#frontend', constraints: ->(req) { !req.xhr? && req.format.html? }
  # Catch-all route for unknown routes
end
