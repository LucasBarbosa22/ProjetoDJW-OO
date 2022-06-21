const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = 935;
const height = canvas.height = 455;

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 4)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 15)},${random(0, 255)},${random(0, 255)})`;
}

const quadrados = [];

while (quadrados.length < 10) {
   const size = random(5,10);
   const quadrado = new Quadrado(
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );

  quadrados.push(quadrado);
}

function loop() {
   ctx.fillStyle = '#05507C';
   ctx.fillRect(1000, 0,  width, height);

   for (const quadrado of quadrados) {
    quadrado.draw();
    quadrado.update();
    quadrado.collisionDetect(quadrados);
   }

   requestAnimationFrame(loop);
}

loop();
