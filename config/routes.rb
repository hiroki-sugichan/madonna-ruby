Rails.application.routes.draw do
  get "access" => "other#access"
  get "price" => "service#price"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/" => "home#top"
end
