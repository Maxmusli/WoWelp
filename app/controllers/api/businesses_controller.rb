class Api::BusinessesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    @businesses = Business.all
    
    render :index
  end

  def show
    @business = Business.find(params[:id])
    if @business
      render :show
    end
  end
end
