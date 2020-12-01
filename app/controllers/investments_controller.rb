class InvestmentsController < ApplicationController
    before_action :find_id, only: [:show, :edit, :update, :destroy]

    def investment_params
        params.require(:investment).permit(:user_id, :category, :amount, :return_of_investment)
    end
    
    def find_id
        @investment = Investment.find(params[:id])
    end

    def new
        @investment = investments.build
        render layout: false
    end

    def create
        investment = Investment.create!(
            user_id: params['investment']['user_id'],
            category: params['investment']['category'],
            amount: params['investment']['amount'],
            return_of_investment: params['investment']['return_of_investment']
        )
        if investment
            render json: {
            status: :created,
            investment: investment
        }
        else
            render json: { status: 500 }
        end
    end

    def show
        render json: investment
    end

    def edit
        render layout: false
    end

    def update
        investment = Investment.find_by(id: find_id) 
        investment.update!(
            category: params['investment']['category'],
            amount: params['investment']['amount'],
            return_of_investment: params['investment']['return_of_investment']
        )
        if investment
            render json: {
            status: :updated,
            investment: investment
        }
        else
            render json: { status: 500 }
        end
    end

    def destroy
        investment = Investment.find_by(id: find_id)
        investment.destroy
        if investment
            render json: {
            status: :deleted,
            investment: investment
        }
        else
            render json: { status: 500 }
        end
    end
end