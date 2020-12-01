class IncomesController < ApplicationController
    before_action :find_id, only: [:show, :edit, :update, :destroy]

    def income_params
        params.require(:income).permit(:budget_id, :category, :money, :description)
    end

    def new
        @income = incomes.build
        render layout: false
    end

    def create
        income = Income.create!(
            budget_id: params['income']['budget_id'],
            category: params['income']['category'],
            money: params['income']['money'],
            description: params['income']['description']

        )
        if income
            render json: {
            status: :created,
            income: income
        }
        else
            render json: { status: 500 }
        end
    end

    def show
        render layout: income
    end

    def edit
        render layout: false
    end

    def update
        income = Income.find_by(id: find_id) 
        income.update!(
            category: params['income']['category'],
            money: params['income']['money'],
            description: params['income']['description']
        )
        if income
            render json: {
            status: :updated,
            income: income
        }
        else
            render json: { status: 500 }
        end
    end

    def destroy
        income = Income.find_by(id: find_id)
        income.destroy
        if income
            render json: {
            status: :deleted,
            income: income
        }
        else
            render json: { status: 500 }
        end
    end

    def find_id
        @income = Income.find(params[:id])
    end
end