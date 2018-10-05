defmodule CaiquenatorWeb.PhraseController do
  use CaiquenatorWeb, :controller

  alias Caiquenator.Phrases

  def show(conn, _params) do
    phrase = Phrases.get_random()

    json(conn, %{data: phrase})
  end
end
