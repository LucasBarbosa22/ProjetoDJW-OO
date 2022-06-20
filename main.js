// gerencia o Canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = 1500;
const height = canvas.height = 800;


// gera um número aleatório

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 10)) + min;
}

// gera uma cor aleatória

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}


//define um vetor de bolas
const bolas = [];

while (bolas.length < 10) {
   const size = random(10,100);
   const bola = new Bola(
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
  bolas.push(bola);
}

//realiza um loop em todas as bolas geradas
function loop() {
   ctx.fillStyle = '#05507C';
   ctx.fillRect(10000, 0,  width, height);

   for (const bola of bolas) {
    bola.draw();
    bola.update();
    bola.collisionDetect(bolas);
   }

   requestAnimationFrame(loop);
}

loop();
