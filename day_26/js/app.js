const buttons = document.querySelectorAll('.tile__button');

function swapTile() {
  if (!this.parentElement.nextElementSibling) {
    this.parentElement.classList.remove('active');
    document.querySelector('.tile').classList.add('active');
  } else {
    this.parentElement.classList.remove('active');
    this.parentElement.nextElementSibling.classList.add('active');
  }
  console.log(this.parentElement.nextElementSibling); 
}

buttons.forEach(button => button.addEventListener('click', swapTile));