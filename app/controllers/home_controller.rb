class HomeController < ApplicationController
  def show
    redirect_to qrcodelink_path(42)
  end
end