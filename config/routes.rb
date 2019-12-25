Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'root#root'

  namespace :api, defaults: { format: :json } do 
    resources :users
    resource :session
    resources :businesses
    resources :reviews, only: [:create, :edit, :update, :destroy]
  end
end
