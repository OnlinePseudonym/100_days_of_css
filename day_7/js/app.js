const search = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const tile = document.querySelector('.tile');

function toggleSearch() {
  searchInput.classList.toggle('active');
}

function toggleMenu() {
  menu.classList.toggle('active');
  tile.classList.toggle('pushed');
}

search.addEventListener('click', toggleSearch);
menuIcon.addEventListener('click', toggleMenu);