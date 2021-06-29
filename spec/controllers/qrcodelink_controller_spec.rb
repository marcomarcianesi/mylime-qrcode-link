require "rails_helper"

RSpec.describe QrcodelinkController, type: :controller do
  describe "GET show" do
    subject { get "show", params: { id: 666 } }

    it "responds with a success code" do
      subject
      expect(response).to have_http_status(:ok)
    end

    it "renders the correct template" do
      subject
      expect(response).to render_template("qrcodelink/show")
    end
  end
end