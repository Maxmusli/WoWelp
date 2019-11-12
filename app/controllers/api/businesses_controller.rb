class Api::BusinessesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    
    near = params[:filters][:near]
    find = params[:filters][:find]
   
    cookies[:near] = params[:filters][:near]
    cookies[:find] = params[:filters][:find]
    
    if near != "" && find != ""
    
      @matches = Business.find_business(cookies[:find])
      @businesses = Business.near_location(cookies[:near]).select { |business| @matches.include?(business) }
    elsif find == ""
      @businesses = Business.near_location(cookies[:near])
    elsif near == ""
      @matches = Business.find_business(cookies[:find])
      @businesses = Business.select { |business| @matches.include?(business) }
    end
    
    render :index
  end

  def show
    @business = Business.find(params[:id])
    if @business
      render :show
    end
  end

end
