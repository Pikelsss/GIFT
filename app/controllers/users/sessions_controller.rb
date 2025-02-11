module Users
  class SessionsController < Devise::SessionsController
    protected

    def after_sign_in_path_for(resource)
      home_index_path # Redirect to home#index after sign in
    end
  end
end
