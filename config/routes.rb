Rails.application.routes.draw do
  # Set root route to home#index
  root to: 'home#index'

  # Resources for gifts
  resources :gifts do
    collection do
      get 'flower' # Route for the flower action
    end
  end
end
