Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:index, :show] do
      resources :reviews, only: [:create, :index, :show]
    end

    get "businesses/featured/:id", to: "businesses#featured"
  end
end
