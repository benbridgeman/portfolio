// On page load display content
const main = document.querySelector("main");

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    main.classList.remove("hide");
  }, 200);
  setTimeout(function() {
    main.classList.add("opacity");
  }, 700);
});
