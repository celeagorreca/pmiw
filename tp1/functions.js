function cargaPersonaje(INICIO, FIN, ARREGLO){
  for(let i = INICIO; i < FIN ; i++){
    ARREGLO.push(loadImage( "/assets/red_"+i+".png"));
}
  for(let i = INICIO; i < FIN ; i++){
    ARREGLO.push(loadImage( "/assets/red_"+i+".png"));
}
  for(let i = INICIO; i < FIN ; i++){
    ARREGLO.push(loadImage( "/assets/red_"+i+".png"));
}
}

function cargaPikachu(INICIO, FIN, ARREGLO){
  for(let i = INICIO; i < FIN ; i++){
    ARREGLO.push(loadImage( "/assets/pikachu_"+i+".png"));
}
  for(let i = INICIO; i < FIN ; i++){
    ARREGLO.push(loadImage( "/assets/pikachu_"+i+".png"));
}
  for(let i = INICIO; i < FIN ; i++){
    ARREGLO.push(loadImage( "/assets/pikachu_"+i+".png"));
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