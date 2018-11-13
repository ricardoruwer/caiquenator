const toggleCopyButton = (element) => {
  const button = document.querySelector(element.dataset.toggleCopyButton)

  element.onmouseenter = () => button.style.opacity = 1
  element.onmouseleave = () => button.style.opacity = 0
}

document.querySelectorAll("[data-toggle-copy-button]")
  .forEach(element => toggleCopyButton(element))
