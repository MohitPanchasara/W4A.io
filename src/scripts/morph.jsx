const one = document.querySelector(".human");
const two = document.querySelector(".human-a");
const three = document.querySelector(".machine");
const four = document.querySelector(".machine-e");

const divs = [one, two, three, four];

function animation(entires) {
  entires.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("human")) {
        entry.target.style.animation = "seprate 7.5s both";
      }
      if (entry.target.classList.contains("human-a")) {
        entry.target.style.animation = "hide 6s both";
      }
      if (entry.target.classList.contains("machine")) {
        entry.target.style.animation = "sep 7.5s both";
      }

      if (entry.target.classList.contains("machine-e")) {
        entry.target.style.animation = "hide_e 6s both";
      }
    }
  });
}
const observer = new IntersectionObserver(animation);
divs.forEach((div) => observer.observe(div));
