defmodule CaiquenatorWeb.Router do
  use CaiquenatorWeb, :router

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_flash)
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
  end

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/", CaiquenatorWeb do
    pipe_through(:browser)

    get("/", PageController, :index)
  end

  scope "/api", CaiquenatorWeb do
    pipe_through(:api)

    get("/phrase", PhraseController, :show)
  end
end
