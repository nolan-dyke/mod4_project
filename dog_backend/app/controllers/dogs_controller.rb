class DogsController < ApplicationController
    def show
        @dogs = Dog.all 
        render json: @dogs
    end 
end
