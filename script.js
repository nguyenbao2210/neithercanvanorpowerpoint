const curtain = document.getElementById("curtain");
const slides = document.querySelectorAll(".slide");
const slidesContainer = document.getElementById("slides");
let opened = false;
let current = 0;

// Mở rèm khi click lần đầu
window.addEventListener("click", () => {
  if (!opened) {
    curtain.classList.add("open");
    slidesContainer.classList.add("done");
    setTimeout(() => { curtain.style.display = "none"; }, 1600);
    opened = true;
  } else {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }
});

// Chuyển slide bằng phím
document.addEventListener("keydown", (e) => {
  if (!opened) return;
  if (e.key === "ArrowRight" || e.key === " ") {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }
  if (e.key === "ArrowLeft") {
    slides[current].classList.remove("active");
    current = (current - 1 + slides.length) % slides.length;
    slides[current].classList.add("active");
  }
});

