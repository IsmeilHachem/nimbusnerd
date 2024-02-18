document.addEventListener("DOMContentLoaded", (event) => {
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.querySelector(".dropbtn").addEventListener("click", (event) => {
      event.preventDefault();
      dropdown.querySelector(".dropdown-content").classList.toggle("show");
    });
  });
});