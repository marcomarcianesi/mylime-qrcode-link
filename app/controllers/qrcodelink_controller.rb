class QrcodelinkController < ApplicationController
  def show
    @api_url = scan_api_qrcodelink_path(params[:id], format: :json)
  end
end