module Api
    module V1
        class UsersController < ApplicationController
            def index
                @users = User.all
                render @users
            end
        end
    end
end