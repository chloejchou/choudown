class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      log_in!(@user)
      render :show
    else
      render json: ["This username/password combination does not exist"], status: 422
    end
  end

  def destroy
    if log_out
      render json: {}
    else
      render json: ["No one is logged in"], status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
