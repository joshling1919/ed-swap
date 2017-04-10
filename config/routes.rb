Rails.application.routes.draw do
  devise_for :users, :controllers => { sessions: 'sessions', registrations: 'registrations' } 
  root to: "static_pages#root"
  get '*path', to: 'static_pages#root'
end
