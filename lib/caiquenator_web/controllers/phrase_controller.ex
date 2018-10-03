defmodule CaiquenatorWeb.PhraseController do
  use CaiquenatorWeb, :controller

  @external_resource "priv/data.yml"
  @phrases File.cwd!()
           |> Path.join(@external_resource)
           |> YamlElixir.read_from_file!()

  def show(conn, _params) do
    phrase = Enum.random(@phrases)

    json(conn, %{data: phrase})
  end
end
