document.querySelectorAll('.menu-item.has-submenu .menu-link').forEach(function(item) {
  item.addEventListener('click', function(e) {
      e.preventDefault();

      var submenu = this.nextElementSibling;

      if (submenu.style.display === 'none' || submenu.style.display === '') {
          closeAllSubmenus();
      }

      submenu.style.display = (submenu.style.display === 'none' || submenu.style.display === '') ? 'block' : 'none';
  });
});

function closeAllSubmenus() {
  document.querySelectorAll('.menu-item.has-submenu .submenu').forEach(function(submenu) {
      submenu.style.display = 'none';
  });
}
