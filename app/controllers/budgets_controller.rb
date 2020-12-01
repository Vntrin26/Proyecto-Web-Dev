class BudgetsController < ApplicationController
    before_action :find_id, only: [:show, :edit, :update, :destroy]

    def budget_params
        params.require(:budget).permit(:user_id, :name, :description)
    end

    def new
        @budget = budgets.build
        render layout: false
    end

    def create
        budget = Budget.create!(
            user_id: params['budget']['user_id'],
            name: params['budget']['name'],
            description: params['budget']['description']
        )
        if budget
            render json: {
            status: :created,
            budget: budget
        }
        else
            render json: { status: 500 }
        end
    end

    def show
        render json: budget
    end

    def edit
        render layout: false
    end

    def update
        budget = Budget.find_by(id: find_id) 
        budget.update!(
            name: params['budget']['name'],
            description: params['budget']['description']
        )
        if budget
            render json: {
            status: :updated,
            budget: budget
        }
        else
            render json: { status: 500 }
        end
    end

    def destroy
        budget = Budget.find_by(id: find_id)
        budget.destroy
        if budget
            render json: {
            status: :deleted,
            budget: budget
        }
        else
            render json: { status: 500 }
        end
    end

    def find_id
        @budget = Budget.find(params[:id])
    end

end