const cards = document.querySelectorAll(".card");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const root = document.documentElement;
const body = document.body;

cards.forEach((card, index) => {
  card.classList.add("reveal");
  card.style.transitionDelay = prefersReducedMotion ? "0ms" : `${index * 80}ms`;
});

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
} else {
  cards.forEach((card) => card.classList.add("in-view"));
}

const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

if (isTouchDevice || prefersReducedMotion) {
  body.classList.add("no-custom-cursor");
} else {
  body.classList.add("cursor-hidden");
  let cursorX = -999;
  let cursorY = -999;
  let targetX = -999;
  let targetY = -999;
  let rafId = null;

  const renderCursor = () => {
    cursorX += (targetX - cursorX) * 0.2;
    cursorY += (targetY - cursorY) * 0.2;
    root.style.setProperty("--cursor-x", `${cursorX}px`);
    root.style.setProperty("--cursor-y", `${cursorY}px`);
    rafId = requestAnimationFrame(renderCursor);
  };

  window.addEventListener("mousemove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    body.classList.remove("cursor-hidden");
    if (!rafId) {
      rafId = requestAnimationFrame(renderCursor);
    }
  });

  window.addEventListener("mouseleave", () => {
    body.classList.add("cursor-hidden");
  });

  const interactiveTargets = document.querySelectorAll("a, button, .card");
  interactiveTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => body.classList.add("cursor-interact"));
    el.addEventListener("mouseleave", () => body.classList.remove("cursor-interact"));
  });
}

cards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    if (prefersReducedMotion) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});
