defmodule Caiquenator.Phrases do
  @external_resource "priv/data.yml"
  @phrases File.cwd!()
           |> Path.join(@external_resource)
           |> YamlElixir.read_from_file!()

  def get_random, do: Enum.random(@phrases)
end
