const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function(e) {
  e.stopPropagation();
  menu.classList.toggle("active");
  menuBtn.textContent = menu.classList.contains("active") ? "✕" : "☰";
});

document.addEventListener("click", function(e) {
  if (menu.classList.contains("active") && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.remove("active");
    menuBtn.textContent = "☰";
  }
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    menu.classList.remove("active");
    menuBtn.textContent = "☰";
  }
});