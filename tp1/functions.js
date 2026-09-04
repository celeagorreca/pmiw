function cargaPersonaje(){
  for(let i = 0; i < 3 ; i++){
    redA.push(loadImage( "/assets/red_"+i+".png"));
}
  for(let i = 3; i < 6 ; i++){
    redD.push(loadImage( "/assets/red_"+i+".png"));
}
  for(let i = 6; i < 8 ; i++){
    redC.push(loadImage( "/assets/red_"+i+".png"));
}
}

function cargaPikachu(){
  for(let i = 0; i < 3 ; i++){
    pikachuA.push(loadImage( "/assets/pikachu_"+i+".png"));
}
  for(let i = 3; i < 5 ; i++){
    pikachuD.push(loadImage( "/assets/pikachu_"+i+".png"));
}
  for(let i = 5; i < 7 ; i++){
    pikachuC.push(loadImage( "/assets/pikachu_"+i+".png"));
  }
}

function estado( nuevoEstado ){
  estadoP = nuevoEstado;
  contadorGeneral = 0;
}

function cambiaEstado(){ 
  if( 0+contadorGeneral*4 > 300 ){
    return true;
  }else{
    return false;
  }
}