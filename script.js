const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 0;

next.addEventListener("click", () => {
  if (currentActive < 3) {
    currentActive++;
    circles[currentActive].classList.add("active");
    progress.style.width = 33 * currentActive + "%";
    prev.disabled = false;
    if (currentActive === 3) {
      next.disabled = true;
    }
  }
});

prev.addEventListener("click", () => {
  if (currentActive > 0) {
    circles[currentActive].classList.remove("active");
    currentActive--;
    progress.style.width = 33 * currentActive + "%";
    next.disabled = false;
    if (currentActive === 0) {
      prev.disabled = true;
    }
  }
});
