Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :bookmarks, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:index, :show] do
      resources :reviews, only: [:create, :index, :show]
      resources :bookmarks, only: [:create]
      delete "bookmarks", to: "bookmarks#destroy"
    end

    resources :reviews, only: [:destroy]
    resources :tags, only: [:index]

    get "businesses/featured/:id", to: "businesses#featured"
    get "users/:user_id/reviews", to: "reviews#profile_reviews"
  end
end
