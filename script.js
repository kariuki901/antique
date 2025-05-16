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
