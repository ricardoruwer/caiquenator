defmodule CaiquenatorWeb.PageControllerTest do
  use CaiquenatorWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get(conn, "/")
    html = html_response(conn, 200)

    phrase =
      html
      |> Floki.find("p.lead")
      |> Floki.text()
      |> String.trim()

    refute phrase == ""
  end
end
