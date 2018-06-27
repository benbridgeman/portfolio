// Adds click functions to device icons, allows user to render iframes for different devices
var desktopIcon = document.querySelector('#monitor-icon')
var tabletIcon = document.querySelector('#tablet-icon')
var phoneIcon = document.querySelector('#phone-icon')
var showcase = document.querySelector('.showcase')

desktopIcon.addEventListener('click', function (desktop) {
  showcase.classList.remove('tablet-display');
  showcase.classList.remove('phone-display');
});

tabletIcon.addEventListener('click', function (tablet) {
  showcase.classList.remove('phone-display');
  showcase.classList.toggle('tablet-display');
});

phoneIcon.addEventListener('click', function (mobile) {
  showcase.classList.remove('tablet-display');
  showcase.classList.toggle('phone-display');