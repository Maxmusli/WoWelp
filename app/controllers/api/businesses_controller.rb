class Api::BusinessesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    
    # near = params[:filters][:near]
    # find = params[:filters][:find]
    
    # if near != "" && find != ""
    #   @businesses = Business.near_location(near)
    #   @matches = Business.find_business(find)
    #   @businesses = Business.select { |business| @matches.include?(business) }
    # end

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
