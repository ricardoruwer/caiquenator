const replaceImages = (phrase) => {
  return phrase.replace(/(https?:\/\/\S+\.(?:png|jpg|jpeg|gif|webp))(?:$|\s)/i, "<img src=\"$1\" style=\"display: block;margin: 0 auto\">")
}

const attachRerenderEvent = (element) => {
  element.addEventListener('rerender', event => {
    event.target.innerHTML = replaceImages(event.target.innerHTML)
  })
  element.dispatchEvent(new Event('rerender'))
}

document.querySelectorAll("[data-phrase]")
  .forEach(element => attachRerenderEvent(element))
