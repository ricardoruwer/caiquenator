defmodule CaiquenatorWeb.PageController do
  use CaiquenatorWeb, :controller

  alias Caiquenator.Phrases

  def index(conn, _params) do
    phrase = Phrases.get_random()

    render(conn, "index.html", phrase: phrase)
  end
end
