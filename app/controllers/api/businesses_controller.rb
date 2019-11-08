class Api::BusinessesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    @businesses = Business.all
    
    render :index
  end
end
