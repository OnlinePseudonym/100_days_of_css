const sun = document.querySelector('.sun-container');
const content = document.querySelector('.content');
activeClasses = Array.from(sun.classList);

function toggleSunset() {
  activeClasses = Array.from(sun.classList).concat(Array.from(content.classList));
  console.log(activeClasses);
  if (!(activeClasses.includes('sunrise') || activeClasses.includes('night'))) {
    sun.classList.toggle('sunrise');
    setTimeout(() => sun.classList.toggle('sunset'), 2000);
    setTimeout(() => {
      sun.classList.toggle('sunrise');
      sun.classList.toggle('sunset');
    }, 4000);
    setTimeout(() => {
      content.classList.toggle('night');
      setTimeout(() => content.classList.toggle('night'), 2300)
    }, 3000);
  };
}

content.addEventListener('click', toggleSunset);