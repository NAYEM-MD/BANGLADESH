// Food Carousel Functionality
document.addEventListener("DOMContentLoaded", () => {
  // Carousel for food section
  const track = document.querySelector(".carousel-track");
  const prev = document.querySelector(".car-btn.prev");
  const next = document.querySelector(".car-btn.next");

  if (track && prev && next) {
    const step = () => Math.max(track.clientWidth * 0.9, 260);
    const update = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      prev.disabled = track.scrollLeft <= 0;
      next.disabled = track.scrollLeft >= max;
    };

    prev.addEventListener("click", () => {
      track.scrollBy({ left: -step(), behavior: "smooth" });
      setTimeout(update, 300);
    });
    next.addEventListener("click", () => {
      track.scrollBy({ left: step(), behavior: "smooth" });
      setTimeout(update, 300);
    });

    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  // Tabs functionality for itinerary section
  const tabs = document.querySelectorAll(".tabs .tab");
  const panels = document.querySelectorAll(".tab-panels .tab-panel");
  
  function activate(tabId) {
    tabs.forEach(tab => {
      const active = tab.dataset.tab === tabId;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", active);
    });
    panels.forEach(panel => {
      const active = panel.id === tabId;
      panel.classList.toggle("is-active", active);
      panel.toggleAttribute("hidden", !active);
    });
  }
  
  tabs.forEach(tab => tab.addEventListener("click", () => activate(tab.dataset.tab)));

  // Back to top button
  const toTop = document.getElementById("toTop");
  if (toTop) {
    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Mobile menu toggle
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.querySelector(".menu");
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open);
    });
  }

  // Footer year
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});

