import "./styles.css";

let container = document.getElementById("star-container");
let star = document.querySelectorAll(".star");
let filled = 0;

container.addEventListener("click", function (e) {
  let currentfilled = e.target.dataset.index;

  for (let i = 0; i < filled; i++) {
    star[i].classList.remove("star-filled");
  }
  for (let i = 0; i < currentfilled; i++) {
    star[i].classList.add("star-filled");
  }

  document.getElementById("count").innerText = `Rating Count: ${currentfilled}`;
  filled = currentfilled;
});

container.addEventListener("mouseover", function (e) {
  let currentfilled = e.target.dataset.index;

  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("star-filled");
  }
  for (let i = 0; i < currentfilled; i++) {
    star[i].classList.add("star-filled");
  }
});

container.addEventListener("mouseleave", function (e) {
  let currentfilled = e.target.dataset.index;

  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("star-filled");
  }
  for (let i = 0; i < filled; i++) {
    star[i].classList.add("star-filled");
  }
});
