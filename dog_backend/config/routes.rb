Rails.application.routes.draw do
  resources :favorites
  resources :dogs
  resources :users
  post "login", to: "authentication#login"
end
