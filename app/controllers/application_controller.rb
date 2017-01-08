class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  attr_reader :current_user

  def log_in!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def log_out
    return false unless current_user
    current_user.reset_session_token!
    session[:session_token] = nil

    true
  end

  helper_method :current_user
end
