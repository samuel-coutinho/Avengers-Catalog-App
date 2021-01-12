class Api::V1::AvengersController < ApplicationController
  before_action :authenticate_user!
  
  def index
    avenger = Avenger.all
    render json: avenger
  end

  def create
    avenger = Avenger.create!(avenger_params)
    if avenger
      render json: avenger      
    else
      render json: avenger.errors      
    end
  end

  def show
    if avenger
      render json: avenger
    else
      render json: avenger.errors
    end
  end

  def destroy
    avenger&.destroy
    render json: { message: 'Hero deleted!' }
  end

  private

  def avenger_params
    params.permit(:hero_name, :real_name, :status, :age, :description, :image)
  end

  def avenger
    @avenger ||= Avenger.find(params[:id])
  end
end
