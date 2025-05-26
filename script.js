document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");
  const grid = document.querySelector(".projects-grid");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("active")) return;

      // Switch active button
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");

      // Fade out grid
      grid.style.opacity = 0;

      setTimeout(() => {
        cards.forEach(card => {
          if (category === "all" || card.getAttribute("data-category") === category) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
        // Fade in grid
        grid.style.opacity = 1;
      }, 300);
    });
  });
});

















document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentIndex = 0;
  const slideIntervalTime = 7000;
  let slideInterval;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle("active", i === index);
    });
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function prevTestimonialFunc() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  nextBtn.addEventListener("click", () => {
    nextTestimonial();
    resetInterval();
  });

  prevBtn.addEventListener("click", () => {
    prevTestimonialFunc();
    resetInterval();
  });

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextTestimonial, slideIntervalTime);
  }

  // Initialize
  showTestimonial(currentIndex);
  slideInterval = setInterval(nextTestimonial, slideIntervalTime);
});
