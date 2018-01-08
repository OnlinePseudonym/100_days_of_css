const drop = document.querySelector('.upload');
const label = document.querySelector('.label');
const sync = document.querySelector('.uploading');
const done = document.querySelector('.success');
const fa = document.querySelector('.fa');
const btn = document.querySelector('button');
const input = document.querySelector('.inputfile');

const allListeners = ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'];
const over = ['dragover', 'dragenter'];
const out = ['dragleave', 'dragend', 'drop'];

let droppedFiles = false;
let uploading = false;
let fileName = '';

function addMultiListeners(element, listeners, fn) {
  listeners.forEach(listener => element.addEventListener(listener, fn));
}

function stopDefault(e) {
  e.preventDefault();
  e.stopPropagation();
}

function addDragOver() {
  this.classList.add('is-dragover');
}

function removeDragOver() {
  this.classList.remove('is-dragover'); 
}

function displayFile(e) {
  console.log(e);
  droppedFiles = e.target.files;
  fileName = droppedFiles[0]['name'];
  fa.classList.remove('fa-cloud-upload');
  label.classList.add('filename');
  label.textContent = fileName;
}

function uploadFile() {
  if (fileName != '' && !uploading) {
    uploading = true;
    btn.textContent = 'Uploading...';
    drop.classList.remove('display');
    sync.classList.add('display');
    setTimeout(function() {
      sync.classList.remove('display');
      done.classList.add('display');
      btn.textContent = 'Done';
    }, 3000);
  }
}

addMultiListeners(drop, allListeners, stopDefault);
addMultiListeners(drop, over, addDragOver);
addMultiListeners(drop, out, removeDragOver);


drop.addEventListener('drop', (e) => {
  droppedFiles = e.dataTransfer.files;
  fileName = droppedFiles[0]['name'];
  fa.classList.remove('fa-cloud-upload');
  label.classList.add('filename');
  label.textContent = fileName;
});
input.addEventListener('change', displayFile);
btn.addEventListener('click', uploadFile);
 