const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max + 1)) + min
}

const createExplosionElement = (x, y) => {
  let element = document.createElement("div")

  element.setAttribute("style", `left:${x - 150}px;top:${y - 150}px`)
  element.setAttribute("class", "explosion")

  return element
}

const createParticleElement = (x, y, color) => {
  let element = document.createElement("div")

  element.setAttribute("style", `background-color:rgb(${color});left:${x}px;top:${y}px`)
  element.setAttribute("class", "particle")

  return element
}

const explode = (x, y) => {
  let particles = 15
  let explosion = createExplosionElement(x, y)

  document.body.appendChild(explosion)

  for (let i = 0; i < particles; i++) {
    let color = randomBetween(0, 255) + ',' + randomBetween(0, 255) + ',' + randomBetween(0, 255)
    x = (explosion.clientWidth / 2) + randomBetween(80, 150) * Math.cos(2 * Math.PI * i / randomBetween(particles - 10, particles + 10))
    y = (explosion.clientHeight / 2) + randomBetween(80, 150) * Math.sin(2 * Math.PI * i / randomBetween(particles - 10, particles + 10))

    let particle = createParticleElement(x, y, color)

    if (i == 0) {
      particle.addEventListener('webkitAnimationEnd oanimationend msAnimationEnd animationend', (event) => {
	explosion.remove()
      })

      // fallback removal
      setTimeout(() => explosion.remove(), 1000)
    }

    explosion.appendChild(particle)
  }
}

const attachClickEvent = (element) => {
  element.addEventListener("click", event => {
    explode(event.pageX, event.pageY)
  })
}

document.querySelectorAll(".explode")
  .forEach(element => attachClickEvent(element))
