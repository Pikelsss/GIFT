module Users
  class RegistrationsController < Devise::RegistrationsController
    protected

    def after_sign_up_path_for(resource)
      home_index_path # Redirect to home#index after sign up
    end
  end
end
