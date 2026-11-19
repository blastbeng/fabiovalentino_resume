(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.documentElement.classList.add("js");

  /* Sticky header state */
  const onScroll = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 12);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile navigation */
  if (toggle && nav) {
    const label = (open) => {
      const t = window.fvI18n;
      const fallback = open ? "Close menu" : "Open menu";
      return t ? t.t(open ? "a11y.menuClose" : "a11y.menu", fallback) : fallback;
    };

    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", label(open));
      nav.classList.toggle("open", open);
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("fv:langchange", () => {
      setOpen(toggle.getAttribute("aria-expanded") === "true");
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });

    document.addEventListener("click", (event) => {
      if (!nav.classList.contains("open")) return;
      if (!nav.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
    });
  }

  /* Reveal on scroll */
  const revealables = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealables.forEach((el) => el.classList.add("visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    revealables.forEach((el) => observer.observe(el));
  }

  /* Experience years: current year minus the first job start (2011) */
  const FIRST_EXPERIENCE_YEAR = 2011;
  const experienceYears = Math.max(0, new Date().getFullYear() - FIRST_EXPERIENCE_YEAR);

  const renderExperienceYears = () => {
    document.querySelectorAll("[data-experience-years]").forEach((node) => {
      node.textContent = String(experienceYears);
    });
  };

  renderExperienceYears();
  document.addEventListener("fv:langchange", renderExperienceYears);

  /* Count-up for the hero statistic */
  const counter = document.querySelector("[data-count]");
  if (counter) {
    counter.dataset.count = String(experienceYears);
    counter.textContent = String(experienceYears);
  }
  if (counter && !reduceMotion && "IntersectionObserver" in window) {
    const target = Number(counter.dataset.count) || 0;
    counter.textContent = "0";
    const animate = () => {
      const start = performance.now();
      const duration = 900;
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = String(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          animate();
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(counter);
  }

  /* Footer year */
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
