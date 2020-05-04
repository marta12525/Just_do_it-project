function toggleMenu (visible) {
  document.querySelector('.sidebar').classList.toggle('sidebar-show', visible);
}

document.querySelector('.hamburger-btn').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});