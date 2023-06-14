# frozen_string_literal: true

Rails.application.routes.draw do
  root 'articles#tabagismo'

  get '/tabagismo', to: 'articles#tabagismo'
  get '/saude', to: 'articles#saude'
  get '/process', to: 'articles#process'
  get '/statistics', to: 'articles#statistics'
  get '/about', to: 'articles#about'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
