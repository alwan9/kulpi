
  document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.querySelector('[data-collapse-toggle="navbar-dropdown"]');
    const navbarDropdown = document.querySelector('#navbar-dropdown');
    const dropdownNavbarLink = document.querySelector('#dropdownNavbarLink');
    const dropdownNavbar = document.querySelector('#dropdownNavbar');

    // Toggle mobile menu
    navbarToggle.addEventListener('click', function () {
      const expanded = navbarToggle.getAttribute('aria-expanded') === 'true' || false;
      navbarToggle.setAttribute('aria-expanded', !expanded);
      navbarDropdown.classList.toggle('hidden');
    });

    // Toggle dropdown menu
    dropdownNavbarLink.addEventListener('click', function () {
      const expanded = dropdownNavbarLink.getAttribute('data-dropdown-toggle') === 'true' || false;
      dropdownNavbarLink.setAttribute('data-dropdown-toggle', !expanded);
      dropdownNavbar.classList.toggle('hidden');
    });
  });

