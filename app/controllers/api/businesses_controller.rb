class Api::BusinessesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    near = params[:filters][:near]
    find = params[:filters][:find]

    if find

    
    
    render :index
  end

  def show
    @business = Business.find(params[:id])
    if @business
      render :show
    end
  end
end
