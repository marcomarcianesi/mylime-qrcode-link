require "rails_helper"

RSpec.describe Api::QrcodelinkController, type: :controller do
  describe "POST scan" do
    let(:params) { { id: 42, _json: { foo: "bar" } } }
    subject      { post "scan", params: params, format: :json }

    it "responds with a success code" do
      subject
      expect(response).to have_http_status(:ok)
    end

    it "responds with the same json it got as a parameter" do
      subject
      expect(response.body).to eq(params[:_json].to_json)
    end
  end
end