const close = document.querySelector('.close');
users = document.querySelectorAll('.user');

const panel = document.querySelector('.user-panel-1')
const hero = document.querySelector('.hero');
const pic = document.querySelector('.profile-pic');
const interact = document.querySelector('.interact');

function toggleProfile() {
  hero.classList.toggle('return');
  pic.classList.toggle('return');
  interact.classList.toggle('return');
  close.classList.toggle('return');
  panel.classList.toggle('activate-pointer');
}

users.forEach(el => el.addEventListener('click', toggleProfile));
close.addEventListener('click', toggleProfile);
