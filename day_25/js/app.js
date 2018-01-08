const marker = document.querySelector('.marker');
const infoWindow = document.querySelector('.info-window');
let infoWindowOpen = false;

function toggleInfoWindow() {
  if(infoWindowOpen) {
    infoWindow.classList.toggle('rotate-in');
    setTimeout(() => marker.classList.toggle('rotate-out'), 400);
    infoWindowOpen = false;
  }
  else {
    marker.classList.toggle('rotate-out');
    setTimeout(() => infoWindow.classList.toggle('rotate-in'), 400);
    infoWindowOpen = true;
  }
}

marker.addEventListener('click', toggleInfoWindow);
infoWindow.addEventListener('click', toggleInfoWindow);