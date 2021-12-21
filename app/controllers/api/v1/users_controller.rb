module Api
    module V1
        class UsersController < ApplicationController
            def new
                @user = User.new
            end

            def create
                @user = User.new(user_params)
                if @user.save
                    p "success"
        
                else
                    render json: @user.errors.full_messages, status: 422
                end
            end

            private
            
            def user_params
                params.permit(:username, :password, :email, :first_name, :last_name)
            end

        end
    end
end