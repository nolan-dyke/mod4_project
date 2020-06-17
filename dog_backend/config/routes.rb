Rails.application.routes.draw do
  resources :dogs
  resources :users
  post "login", to: "authentication#login"
end
