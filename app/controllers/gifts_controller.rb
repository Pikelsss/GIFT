class GiftsController < ApplicationController
  def index
    @gifts = GiftItem.all # Fetch all gift items
  end

  def new
    # New gift logic here (if needed)
  end

  def flower
    # Logic for the flower action can be empty if you only want to render the view
  end

  def show
    @gift = GiftItem.find(params[:id])  # Use GiftItem instead of Gift
  rescue ActiveRecord::RecordNotFound
    flash[:alert] = "Gift not found."
    redirect_to gifts_path
  end

  # Additional actions (create, edit, update, destroy) can be added here as needed.
end
