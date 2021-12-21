module Api
    module V1
        class SessionsController < ApplicationController
            def new 
                @user = User.new
            end

            def create
                @user = User.find_by(username: user_params[:username])
                if @user && @user.is_password?(user_params[:password])
                    session[:user_id] = @user.id
                    p "successfully logged in"
                else
                    p "no user found"
                    render :new
                end
            end

             private
            
            def user_params
                params.require(:session).permit(:username, :password)
            end
        end
    end
end

