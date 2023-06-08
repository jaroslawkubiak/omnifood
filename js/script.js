////////////////////////////////////////////////
// mobile navigation
const header = document.querySelector(".header");

const btnNav = document.querySelector(".btn-mobile-nav");

btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

////////////////////////////////////////////////
// smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile nav
    if (link.classList.contains("main-nav-link")) header.classList.remove("nav-open");
  });
});

////////////////////////////////////////////////
// sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if(!ent.isIntersecting) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px'
  }
);
obs.observe(sectionHeroEl);
