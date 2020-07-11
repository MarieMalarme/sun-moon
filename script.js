const maxWeight = 300
const minWeight = 100
const diff = maxWeight - minWeight

const { innerWidth, innerHeight } = window

document.addEventListener('mousemove', ({ clientX, clientY }) => {
  const font = document.getElementById('font')
  const weight = calc(clientY / innerHeight, diff) + minWeight
  font.style.fontVariationSettings = `"wght" ${weight}`
  font.style.top = `${-(
    calc(clientY / innerHeight, innerHeight - 350) - 225
  )}px`

  const body = document.querySelector('body')
  const luminosity = calc(clientY / innerHeight, 70)
  body.style.background = `hsl(200, 50%, ${luminosity}%)`
})

const calc = (number, max) =>
  Math.round(Math.min(max, Math.max(0, max * number)))
