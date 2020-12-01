class ExpensesController < ApplicationController
    before_action :find_id, only: [:show, :edit, :update, :destroy]

    def expense_params
        params.require(:expense).permit(:budget_id, :category, :money, :description)
    end

    def new
        @expense = expenses.build
        render layout: false
    end

    def create
        expense = Expense.create!(
            budget_id: params['expense']['budget_id'],
            category: params['expense']['category'],
            money: params['expense']['money'],
            description: params['expense']['description']

        )
        if expense
            render json: {
            status: :created,
            expense: expense
        }
        else
            render json: { status: 500 }
        end
    end

    def show
        render layout: expense
    end

    def edit
        render layout: false
    end

    def update
        expense = Expense.find_by(id: find_id) 
        expense.update!(
            category: params['expense']['category'],
            money: params['expense']['money'],
            description: params['expense']['description']
        )
        if expense
            render json: {
            status: :updated,
            expense: expense
        }
        else
            render json: { status: 500 }
        end
    end

    def destroy
        expense = Expense.find_by(id: find_id)
        expense.destroy
        if expense
            render json: {
            status: :deleted,
            expense: expense
        }
        else
            render json: { status: 500 }
        end
    end

    def find_id
        @expense = Expense.find(params[:id])
    end
end