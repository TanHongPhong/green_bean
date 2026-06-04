document.addEventListener("DOMContentLoaded", () => {
  const topbar = document.querySelector(".gb-topbar");

  if (topbar) {
    const syncTopbar = () => {
      topbar.classList.toggle("scrolled", window.scrollY > 18);
    };

    syncTopbar();
    window.addEventListener("scroll", syncTopbar, { passive: true });
  }

  const staggerGroups = document.querySelectorAll("[data-stagger]");
  staggerGroups.forEach((group) => {
    Array.from(group.children).forEach((child, index) => {
      if (!child.hasAttribute("data-reveal")) {
        child.setAttribute("data-reveal", "");
      }
      child.style.transitionDelay = `${index * 70}ms`;
    });
  });

  const revealNodes = document.querySelectorAll("[data-reveal]");
  if (!revealNodes.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
  );

  revealNodes.forEach((node) => {
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      node.classList.add("is-visible");
      return;
    }

    observer.observe(node);
  });
});
