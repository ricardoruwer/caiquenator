defmodule Caiquenator.PhrasesTest do
  use ExUnit.Case

  alias Caiquenator.Phrases

  describe "get_random/0" do
    test "returns a random phrase" do
      phrases = File.read!('priv/data.yml')
      random_phrase = Phrases.get_random()

      assert phrases =~ random_phrase
    end
  end
end
