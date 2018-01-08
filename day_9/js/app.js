const craters = document.getElementsByClassName('crater');
const bigDrops = document.getElementsByClassName('raindrop-big');
const medDrops = document.getElementsByClassName('raindrop-medium');
const smallDrops = document.getElementsByClassName('raindrop-small');

function ranInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ranNum(min, max) {
    return Math.random() * (max - min) + min;
}
  
for (let i = 0; i < craters.length; i++ ) {
  const diameter = ranInt(7, 20);
  const fromTop = ranInt(0, 70);
  const fromLeft = ranInt(0, 70);
  craters[i].setAttribute('style',
    `width: ${diameter}%;
     height: ${diameter}%;
     top: ${fromTop}px;
     left: ${fromLeft}px;`)
}

for (let i = 0; i < bigDrops.length; i++ ) {
  const drop = 0.7 + ranNum(0,2) / 10;
  const line = ranNum(0,50) / 25;
  bigDrops[i].setAttribute('style',
    `left: ${-20 + 38 * i}px;
     animation: drop ${drop}s linear ${line}s infinite;`);
}

for (let i = 0; i < medDrops.length; i++ ) {
  const drop = 1.3 + ranNum(0,2) / 10;
  const line = ranNum(0,50) / 25;
  medDrops[i].setAttribute('style',
    `left: ${-20 + 38 * i}px;
     animation: drop ${drop}s linear ${line}s infinite;`);
}

for (let i = 0; i < smallDrops.length; i++ ) {
  const drop = 1.9 + ranNum(0,2) / 10;
  const line = ranNum(0,50) / 25;
  smallDrops[i].setAttribute('style',
    `left: ${-20 + 38 * i}px;
     animation: drop ${drop}s linear ${line}s infinite;`);
}
