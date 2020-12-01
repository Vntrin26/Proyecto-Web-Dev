class ExpensesController < ApplicationController
    before_action :find_id

    def expense_params
        params.require(:expense).permit(:category, :money, :description, :created_at)
    end

    def create
        @budget = Budget.find(params[:budget_id])
        @new_expense = @budget.expenses.build(expense_params)

        if @new_expense.save
            render json: @budget, status: 201
        else
            render json: { error: @new_expense.errors.full_messages }, status: 422
        end
    end

    def show
        render layout: false
    end

    def edit
        render layout: false
    end

    def update
        @expense = Expense.find(params[:id])
        @expense.update(expense_params) ? (render :show, layout: false) : (render :edit, layout: false, status: 422)
    end

    def destroy
        @expense = Expense.find(params[:id])
        @expense.destroy
        render json: @budget, status: 200
    end

    def find_id
        @expense = Expense.find(params[:id])
    end
end