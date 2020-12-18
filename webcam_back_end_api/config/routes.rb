Rails.application.routes.draw do
namespace :api do
  namespace :v1 do
    resources :users, only: [:index, :show, :new, :create]
    resources :video_files, only: [:index, :show, :new, :create]
    resources :channels, only: [:index, :show, :new, :create]
  end
end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
