Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  require "sidekiq/web"
  authenticate :user, lambda { |u| u.admin } do
    mount Sidekiq::Web => '/sidekiq'
  end
  resources :movies, only: [:index]
  get "/movies/:omdb_id", to: "movies#show"
  # get "/movies/:omdb_id", to: "movies#contentlike"
  resources :profiles, only: [:show]
end
