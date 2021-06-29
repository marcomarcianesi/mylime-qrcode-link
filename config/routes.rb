Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/", to: "home#show"

  resources :qrcodelink, only: :show

  namespace :api do
    resources :qrcodelink, only: [] do
      member do
        post :scan
      end
    end
  end
end
