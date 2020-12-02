class StaticController < ApplicationController
    def homes
        render json: { status: "It's Working" }
    end
end