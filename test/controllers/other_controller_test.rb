require 'test_helper'

class OtherControllerTest < ActionDispatch::IntegrationTest
  test "should get access" do
    get other_access_url
    assert_response :success
  end

end
