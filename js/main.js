const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = 935;
const height = canvas.height = 455;

// gera um número aleatório

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 4)) + min;
}

// gera uma cor aleatória

function randomRGB() {
  return `rgb(${random(0, 15)},${random(0, 255)},${random(0, 255)})`;
}


//define um vetor de bolas
const quadrados = [];

while (quadrados.length < 10) {
   const size = random(5,10);
   const quadrado = new Quadrado(
      // posição de sempre uma bola de distância
      // fora das bordas para evitar erros de desenho
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );

   //atualiza o vetor
  quadrados.push(quadrado);
}

//realiza um loop em todas as bolas geradas
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
