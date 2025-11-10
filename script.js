const curtain = document.getElementById("curtain");
const slides = document.querySelectorAll(".slide");
const slidesContainer = document.getElementById("slides");
let opened = false;
let current = 0;

// Hàm bật animation feature boxes cho slide s-3
function revealFeatures(slide) {
  const boxes = slide.querySelectorAll('.feature-box');
  boxes.forEach((box, i) => {
    setTimeout(() => {
      box.style.opacity = 1;
      box.style.transform = 'translateY(0)';
    }, i * 200); // delay 200ms giữa các box
  });
}

// Mở rèm và click chuyển slide
window.addEventListener("click", () => {
  if (!opened) {
    // Mở curtain lần đầu
    curtain.classList.add("open");
    slidesContainer.classList.add("done");
    setTimeout(() => { curtain.style.display = "none"; }, 1600);
    opened = true;
  } else {
    // Ẩn slide hiện tại
    slides[current].classList.remove("active");

    // Chuyển slide tiếp theo
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");

    // Nếu slide mới là s-3, bật feature boxes
    if (slides[current].classList.contains("s-3")) {
      revealFeatures(slides[current]);
    }
  }
});

// Chuyển slide bằng phím (giữ nguyên)
document.addEventListener("keydown", (e) => {
  if (!opened) return;
  slides[current].classList.remove("active");

  if (e.key === "ArrowRight" || e.key === " ") {
    current = (current + 1) % slides.length;
  } else if (e.key === "ArrowLeft") {
    current = (current - 1 + slides.length) % slides.length;
  }

  slides[current].classList.add("active");

  // Nếu slide mới là s-3, bật feature boxes
  if (slides[current].classList.contains("s-3")) {
    revealFeatures(slides[current]);
  }
});

// === Slide animation trigger (for specific slides) ===
document.addEventListener('DOMContentLoaded', () => {
  // Chỉ chọn slide s-2 và s-7
  const slides = document.querySelectorAll('.slide.s-2, .slide.s-7');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-animate');
      }
    });
  }, { threshold: 0.3 });

  slides.forEach(slide => observer.observe(slide));
});

document.addEventListener('DOMContentLoaded', () => {
  const slide8 = document.querySelector('.slide.s-8');
  if (!slide8) return;

  const performance = slide8.querySelector('.performance-container');
  const img = performance.querySelector('.performance-img');

  img.addEventListener('click', () => {
    // Chỉ trigger khi slide 8 đang active
    if (!slide8.classList.contains('active')) return;

    // Bắt đầu spin animation
    img.classList.add('spin-start');

    // Sau 2s hiển thị chữ bài hát
    setTimeout(() => {
      performance.classList.add('performance-show-text');
    }, 2000);
  });
});
