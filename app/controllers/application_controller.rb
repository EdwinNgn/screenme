class ApplicationController < ActionController::Base

  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :fetch_new_notifications

  def configure_permitted_parameters
    # For additional fields in app/views/devise/registrations/new.html.erb
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :birth_year, :birth_month, :birth_day, :avatar, :coverpicture])

    # For additional in app/views/devise/registrations/edit.html.erb
  end

  def fetch_new_notifications
  end

  def default_url_options
    { host: ENV["www.screenme.xyz"] || "localhost:3000" }
  end
end
