const target = document.querySelector(`#target`)
let fontSize = 16

const makeTheTextGoBoom = () => {
  target.style.fontSize = `${fontSize}px`
  fontSize += 0.05
}

setInterval(makeTheTextGoBoom, 100)
