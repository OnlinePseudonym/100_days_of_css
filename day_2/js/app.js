const ham = document.querySelector('.hamburger');
const lines = document.querySelectorAll('.line');
let open = false;

function toggleOpen() {
  if(open === false) {
    lines.forEach(line => {
      line.classList.toggle('open');
      setTimeout(function() {line.classList.toggle('x')}, 350);
    });
  }
  else {
    lines.forEach(line => {
      line.classList.toggle('x');
      setTimeout(function() {line.classList.toggle('open')}, 200);
    });
  }
  open = !open;
}

function toggleX() {
  console.log(this);
  this.classList.toggle('x');
}

ham.addEventListener('click', toggleOpen)
