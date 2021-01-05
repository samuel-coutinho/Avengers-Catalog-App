Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'avengers/index'
      post 'avengers/create'
      get '/show/:id', to: 'avengers#show'
      delete '/destroy/:id', to: 'avengers#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
