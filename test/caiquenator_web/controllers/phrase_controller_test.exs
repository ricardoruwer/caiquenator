defmodule CaiquenatorWeb.PhraseControllerTest do
  use CaiquenatorWeb.ConnCase

  test "GET /api/phrase", %{conn: conn} do
    phrases = File.read!('priv/data.yml')

    response =
      conn
      |> get(Routes.phrase_path(conn, :show))
      |> json_response(200)

    assert phrases =~ response["data"]
  end
end
