const sliderTextContent = document.querySelector(`.switch-os`)
const flexWrapper = document.querySelector(`#flex-wrapper`)
const slider = document.querySelector(`.slider`)
const theWindow = document.querySelector(`.window`)
const border = theWindow.querySelector(`.window__border`)

function handleClick() {
  this.classList.toggle(`windows`)
  theWindow.classList.toggle(`windows`)
  border.classList.toggle(`windows`)
  flexWrapper.classList.toggle(`windows`)
  sliderTextContent.classList.toggle(`windows`)
}

slider.addEventListener(`click`, handleClick)
