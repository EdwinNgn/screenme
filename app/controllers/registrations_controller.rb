class RegistrationsController < Devise::RegistrationsController
  protected

  def after_sign_up_path_for(ressource)
    '/step_one'
  end
end
