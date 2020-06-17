class FavoritesController < ApplicationController
    def index 
        headers = request.headers["Authorization"]
        
        if !headers 
            render json: error
        else 
            token = headers.split(" ")[1]
            secret = Rails.application.secrets.secret_key_base 
             @user = JWT.decode(token, secret).first 
             payload = Favorite.where(user_id: @user.first[1])

            render json: {message: payload}
        end 

        # @favorites = Favorite.where(user_id: params[:user_id])
        # render json: @favorites
    end 
end
