const bar = document.querySelector("#bar");
const list = document.querySelector("#list");
const liElements = document.querySelectorAll(".l");

function handleNavToggle() {
  if (window.innerWidth <= 768) {
    bar.addEventListener("click", () => {
      bar.style.display = "none";
      list.style.display = "block";
    });

    liElements.forEach((li) => {
      li.addEventListener("click", () => {
        list.style.display = "none";
        bar.style.display = "block";
      });
    });
  } else {
    bar.style.display = "";
    list.style.display = "";
  }
}

handleNavToggle();

window.addEventListener("resize", handleNavToggle);
