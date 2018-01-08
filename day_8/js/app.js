const blobs = document.getElementsByClassName('blob');
const sparkles = document.getElementsByClassName('sparkle');

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < blobs.length; i++ ) {
  const input = randomInt(1, 300);
  blobs[i].style.transform = `rotate(${input}deg)`
  document.styleSheets[0].addRule(
    `.blob-${i + 1}::after`,
      `transform-origin: ${40 - (i+1) * 3}px ${40 - i * 3}px;
      animation: rotate ${2.5 + (i+1) / 5}s ease-in-out ${i / 5}s infinite;`);
}

for (let i = 0; i < sparkles.length; i++ ) {
  const input = randomInt(1, 300);
  sparkles[i].setAttribute('style',
    `transform: rotate(${input}deg);
      width: ${8+i}px;
      height: ${8+i}px;`)
  document.styleSheets[0].addRule(
    `.sparkle-${i+1}::after`,
      `transform-origin: ${60 - (i+1) * 2}px ${60 - i * 2}px;
      animation: rotate ${3.5 + (i+1) / 5}s ease-in-out ${i / 5}s infinite;
      width: ${8+i}px;
      height: ${8+i}px;`);
}

console.log(sparkles);