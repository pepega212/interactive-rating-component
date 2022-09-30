const mainContainer = document.querySelector(".container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit-rating")
const rateAgain = document.getElementById("rate-again")
const ratings = document.querySelectorAll(".btn")
const actualRating = document.getElementById("rating")
const rating1 = document.getElementById("r1")
const rating2 = document.getElementById("r2")
const rating3 = document.getElementById("r3")
const rating4 = document.getElementById("r4")
const rating5 = document.getElementById("r5")

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none"
  thanksContainer.classList.remove("hidden")
})

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    actualRating.innerHTML = rating.innerHTML
  })
})

rating1.addEventListener("click", () => {
  rating1.style.backgroundColor = "hsl(25, 97%, 53%)"
  rating1.style.color = "white"
  rating2.style.color ="hsl(217, 12%, 63%)"
  rating2.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
  rating3.style.color ="hsl(217, 12%, 63%)"
  rating3.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
  rating4.style.color ="hsl(217, 12%, 63%)"
  rating4.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
  rating5.style.color ="hsl(217, 12%, 63%)"
  rating5.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
})
rating2.addEventListener("click", () => {
  rating2.style.backgroundColor = "hsl(25, 97%, 53%)"
  rating2.style.color = "white"
  rating1.style.color ="hsl(217, 12%, 63%)"
  rating1.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
  rating3.style.color ="hsl(217, 12%, 63%)"
  rating3.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
  rating4.style.color ="hsl(217, 12%, 63%)"
  rating4.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
  rating5.style.color ="hsl(217, 12%, 63%)"
  rating5.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
})
rating3.addEventListener("click", () => {
  rating3.style.backgroundColor = "hsl(25, 97%, 53%)"
  rating3.style.color = "white"
  rating2.style.color ="hsl(217, 12%, 63%)"
  rating2.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
  rating1.style.color ="hsl(217, 12%, 63%)"
  rating1.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
  rating4.style.color ="hsl(217, 12%, 63%)"
  rating4.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
  rating5.style.color ="hsl(217, 12%, 63%)"
  rating5.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
})
rating4.addEventListener("click", () => {
  rating4.style.backgroundColor = "hsl(25, 97%, 53%)"
  rating4.style.color = "white"
  rating2.style.color ="hsl(217, 12%, 63%)"
  rating2.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
  rating3.style.color ="hsl(217, 12%, 63%)"
  rating3.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
  rating1.style.color ="hsl(217, 12%, 63%)"
  rating1.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
  rating5.style.color ="hsl(217, 12%, 63%)"
  rating5.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
})
rating5.addEventListener("click", () => {
  rating5.style.backgroundColor = "hsl(25, 97%, 53%)"
  rating5.style.color = "white"
  rating2.style.color ="hsl(217, 12%, 63%)"
  rating2.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
  rating3.style.color ="hsl(217, 12%, 63%)"
  rating3.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
  rating4.style.color ="hsl(217, 12%, 63%)"
  rating4.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
  rating1.style.color ="hsl(217, 12%, 63%)"
  rating1.style.backgroundColor = "hsla(213, 19%, 18%, 0.541)"
})

rateAgain.addEventListener("click", () => {
  mainContainer.style.display = "block"
  thanksContainer.classList.add("hidden")
})