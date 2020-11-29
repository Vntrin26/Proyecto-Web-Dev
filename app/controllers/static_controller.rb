class StaticController < ApplicationController
    def home
        render json: { status: "It's Working" }
    end
end
