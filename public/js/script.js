const navTrigger = document.getElementById("nav_toggle");
const navMenu = document.getElementById("nav_menu");
const navIcon = document.getElementById("nav_icon");

navTrigger.addEventListener("click", () => {
  navMenu.classList.toggle("nav-is-open");
  // Mengubah ikon berdasarkan status nav-is-open
  if (navMenu.classList.contains("nav-is-open")) {
    navIcon.classList.remove("ri-menu-3-line");
    navIcon.classList.add("ri-close-fill");
  } else {
    navIcon.classList.remove("ri-close-fill");
    navIcon.classList.add("ri-menu-3-line");
  }
});
