export const hamburger = function () {
  function toggleMenu (visible) {
    document.querySelector('.sidebar').classList.toggle('sidebar-show', visible);
    document.querySelector('.topbar-media').classList.toggle('topbar-media-show', visible);
  }
  
  document.querySelector('.hamburger-btn').addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu();
  });
}