require 'test_helper'

class ServiceControllerTest < ActionDispatch::IntegrationTest
  test "should get price" do
    get service_price_url
    assert_response :success
  end

end
