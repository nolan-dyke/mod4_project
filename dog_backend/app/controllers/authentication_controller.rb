class AuthenticationController < ApplicationController

    def login
        @user = User.find_by(username: params[:username])

        if !@user 
            render json: {error: "Bad username"}
        else 
            if !@user.authenticate(params[:password])
                render json: {error: "Bad password"}
            else 
                payload = {
                    user_id: @user.id,
                    username: @user.username
                }
                secret = Rails.application.secrets.secret_key_base
                token = JWT.encode(payload, secret)
                render json: {user: @user, token: token}
            end 
        end

    end 
end
