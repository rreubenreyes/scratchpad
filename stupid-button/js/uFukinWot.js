/* eslint-disable no-undef */
/* target element */
const wot = document.querySelector(`.wot`)

/* listener */
target.addEventListener(`mouseenter`, () => {
  setTimeout(() => wot.classList.remove('active'), 8000)
  wot.classList.add(`active`)
})
