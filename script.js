const humans = document.querySelector("#humans");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: [0.2],
};

function callback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(".enlarge");
    } else {
      entry.target.classList.remove(".enlarge");
    }
  });
}

const observer = new IntersectionObserver(callback, options);
observer.observe(humans);
