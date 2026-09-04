let redA = [];
let redD = [];
let redC = [];
let pikachuA = [];
let pikachuD = [];
let pikachuC = [];

let a, d, c;

let fondo = [];

let estadoP;
let contadorGeneral;
let velocidad = 10;

function preload(){
// fondo
  fondo.push(loadImage( "/assets/fondo.png"));
//personaje
  cargaPersonaje(0, 3, redA);
  cargaPersonaje(3, 6, redD);
  cargaPersonaje(6, 8, redC);
//pikachu
  cargaPikachu(0, 3, pikachuA);
  cargaPikachu(3, 5, pikachuD);
  cargaPikachu(5, 7, pikachuC);
}

function setup() {
  createCanvas(800, 600);
  background(200);
  
  a = d = c = 0;
  estadoP = 0;
  contadorGeneral = 0;
}

function draw() {

  image(fondo[0], 0, 0);
  if (frameCount % velocidad == 0) {
    contadorGeneral++;

    if (estadoP == 0) {
      a++;
      if (a > 2) {
      a = 0;
}
      if (cambiaEstado()) {
        estado(1);
      }
    }

    else if (estadoP == 1) {
      d++;
      if (d > 2) {
      d = 0;
}
      if (cambiaEstado()) {
        estado(2);
      }
    }

    else if (estadoP == 2) {
      c++;
      if (c > 1) {
      c = 0;
}
      if (cambiaEstado()) {
        estado(0);
      }
    }
  }

  // Pikachu
  switch (estadoP) {

    case 0:
      image(pikachuA[a], 270, 600 - contadorGeneral * 4);
      break;

    case 1:
      image(pikachuD[d % pikachuD.length], 300 + contadorGeneral * 4, 260);
      break;

    case 2:
      image(pikachuC[c], 600, 260 - contadorGeneral * 4);
      break;
  }


  // Red
  switch (estadoP) {

    case 0:
      image(redA[a], 330, 600 - contadorGeneral * 4);
      break;

    case 1:
      image(redD[d], 320 + contadorGeneral * 4, 260);
      break;

    case 2:
      image(redC[c], 660, 260 - contadorGeneral * 4);
      break;
  }
}
