class Api::UsersController < ApplicationController
  def create
    @user = User.new(users_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
      # flash.now[:errors] = @user.errors.full_messages
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render json: {message: "User not found"}, status: 404
    end
  end

  def destroy
    @user = selected_user
    if @user
      @user.destroy
      render :show
    else
      render ["User does't exist"]
    end
  end

  # not sure about update user

  # def update
  #   @user = selected_user
  #   if @user.update(users_params)
  #     redirect_to user_url(@user)
  #   else
  #     render json: @user.errors.full_messages, status: 422
  #   end
  # end

  private

  def selected_user
    User.find(params[:id])
  end

  def users_params
    params.require(:user).permit(:email, :fname, :lname, :password)
  end
end
