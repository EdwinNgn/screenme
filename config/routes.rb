  Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  require "sidekiq/web"
  authenticate :user, lambda { |u| u.admin } do
    mount Sidekiq::Web => '/sidekiq'
  end

  get "/step_one", to: "forms#step_one"
  post "/step_one", to: "forms#step_one"
  get "/step_two", to: "forms#step_two"
  get "/step_three", to: "forms#step_three"
end
