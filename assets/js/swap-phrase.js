const fetchRandomPhrase = () => {
  return fetch("/api/phrase")
    .then(response => response.json())
    .then(json => json.data)
}

const swapPhrase = (element) => {
  const phraseTarget = element.querySelector("[data-phrase]")
  const button = element.querySelector("[data-button]")

  button.addEventListener("click", event => {
    fetchRandomPhrase()
      .then(data => {
        phraseTarget.innerHTML = data
        phraseTarget.dispatchEvent(new Event('rerender'))
      })
  });
}

document.querySelectorAll("[data-random-phrase]")
  .forEach(element => swapPhrase(element))
