Rails.application.routes.draw do
  namespace :api do
    resources :movies
  end

  get '*other', to: 'static#index'
end
