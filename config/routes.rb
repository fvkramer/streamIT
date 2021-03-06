Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :videos
    resources :results, only: [:index]
    resources :feed, only: [:show]
    get 'results/:category', :to => 'results#recommended_search'
  end
  
  root "static_pages#root"
end
