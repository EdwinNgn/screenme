Rails.application.routes.draw do
  get 'profiles/show'
  get 'movies/index'
  get 'movies/show'
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  require "sidekiq/web"
  authenticate :user, lambda { |u| u.admin } do
    mount Sidekiq::Web => '/sidekiq'
  end
  resources :movies, only: [:show, :index]
  resources :profiles, only: [:show]
end
