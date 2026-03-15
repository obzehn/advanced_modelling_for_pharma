document.addEventListener("DOMContentLoaded", function () {

  const current = window.location.pathname.split("/").pop().split(".")[0];
  const links = document.querySelectorAll(".exercise-nav a");

  links.forEach(link => {
    const href = link.getAttribute("href");
    const page = href.split("/").pop().split(".")[0];

    if (page === current) {
      link.classList.add("active");
    }
  });

});
