module Api
  class QrcodelinkController < ApplicationController
    def scan
      respond_to do |format|
        format.json { render json: params[:_json] }
      end
    end
  end  
end