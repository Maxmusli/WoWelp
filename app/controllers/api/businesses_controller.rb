class Api::BusinessesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    bounds = params[:filters][:bounds]
    near = params[:filters][:near]
    find = params[:filters][:find]
   
    cookies[:near] = params[:filters][:near]
    cookies[:find] = params[:filters][:find]

    if bounds
      bound_filter = Business.in_bounds(bounds)
    end
    
    if near != "" && find != ""
      @business = Business.near_location(cookies[:near])
      @matches = Business.find_business(cookies[:find])
      @businesses = @business.select { |business| @matches.include?(business) }

      if bound_filter
        @businesses = @businesses.select { |business| bound_filter.include?(business) }
      end
    elsif find == ""
      @businesses = Business.near_location(cookies[:near])

      if bound_filter
        @businesses = @businesses.select { |business| bound_filter.include?(business) }
      end
    elsif near == ""
      @matches = Business.find_business(cookies[:find])
      @businesses = Business.select { |business| @matches.include?(business) }

      if bound_filter
        @businesses = @businesses.select { |business| bound_filter.include?(business) }
      end
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
