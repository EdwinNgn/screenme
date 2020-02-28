  Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations'}
  root to: 'pages#home'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  require "sidekiq/web"
  authenticate :user, lambda { |u| u.admin } do
    mount Sidekiq::Web => '/sidekiq'
  end
  get "/step_one", to: "forms#step_one"
  post "/step_one", to: "forms#step_one"
  get "/step_two", to: "forms#step_two"
  post "/step_two", to: "forms#step_two"


  post "movies/:imdbID/like", to: "recommendables#like", as: "liking_movie"
  post "movies/:imdbID/dislike", to: "recommendables#dislike", as: "disliking_movie"
  post "movies/:imdbID/save", to: "recommendables#save", as: "saving_movie"
  post "movies/:imdbID/blacklist", to: "recommendables#blacklist", as: "blacklisting_movie"

  resources :movies, only: [:index]
  get "/movies/:omdb_id", to: "movies#show", as: "show_movie"
  # get "/movies/:omdb_id", to: "movies#contentlike"
  resources :profiles, only: [:show]

end
