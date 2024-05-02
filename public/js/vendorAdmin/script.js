const el = document.getElementById("wrapper");
const toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
  el.classList.toggle("toggled");
};

// for admin header heading change
const sideHeading = document.querySelector(".side-heading");
const path = new URL(location.href).pathname.split("/")[3];
sideHeading.innerHTML = path;

// for sidebar active class change
const list = document.querySelectorAll(".sidebar-list a");
list.forEach(el => {
  el.classList.remove("active");
});
document.querySelector(`#${path.toLowerCase()}`).classList.add("active");


