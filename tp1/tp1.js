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
let frameCambio = 0;
let tiempito = 500;

function preload(){
// fondo
  fondo.push(loadImage( "/assets/fondo.png"));
//personaje
  cargaPersonaje();
//pikachu
  cargaPikachu();
}

function setup() {
  createCanvas(800, 600);
  background(200);
  a = d = c = 0;
  estadoP = 0;
  contadorGeneral = 0;
}

function draw() {
  image( fondo[0], 0, 0 );

    if (millis() - frameCambio >= tiempito) {

// Pikachu
  switch (estadoP){
  case 0:
    image( pikachuA[a], 270, 600-contadorGeneral*4 );
  break;

  case 1:
    image( pikachuD[d % pikachuD.length], 300+contadorGeneral*4, 260 );
   break;

   case 2:
     image( pikachuC[c], 600, 260-contadorGeneral*4 );
   break;
 }   
    // Red
    switch (estadoP) {
  case 0:
    image( redA[a], 330, 600-contadorGeneral*4 );
    a++;
    if ( a > 2 ) a = 0;
    if( cambiaEstado() ){
    estado (1);
}
    
  break;
  
  case 1:
    image( redD[d], 320+contadorGeneral*4, 260 );
    d++;
    if ( d > 2 ) d = 0;
    if( cambiaEstado() ){
    estado (2);
}
  break;
  
  case 2:
    image( redC[c], 660, 260-contadorGeneral*4 );
    c++;
    if( c > 1 ) c = 0;
    if( cambiaEstado() ){
    estado (0);
} 
  break;
} 

    contadorGeneral++;
 }
}
