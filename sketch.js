let cor;
let circuloX;
let circuloY;

function setup() {
  createCanvas(600, 450);
  background ("green");
  cor = color (random(0, 255), random(0, 255), random(0, 255));
  circuloX = [0,0,0];
  circuloY = [random (height),random (height),random (height)];
}

// circuloX = 0,0,0
// circuloY = 300,150,50

function draw() {
  fill (cor);
  
  // console.log (circuloX.lenght);
  for (let contador in circuloX) {
    console.log (contador);
    circle (circuloX [contador],circuloY [contador], 50);
    circuloX [contador]+=random (0,3);
    circuloY [contador]+=random (-3,3);

  if (circuloX[contador] >= width) {
    circuloX [contador] = 0;
    circuloY [contador] = random (height);
  }
    
}
  
  if(mouseIsPressed) {
    cor = color (random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}