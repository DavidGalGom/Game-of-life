let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
let boardNextStage = [];

//Para las celdas en vivas/true/1 
//Si tiene 2 o 3 vecinos vivos sigue vivo, sino muere
let counterForAlives = 0;
if (counterForAlives < 2 || counterForAlives > 3){
 boardNextStage[x][y] = 0;
}
else if (counterForAlives === 2 || counterForAlives === 3){
boardNextStage[x][y] = 1;
}

//Para las celdas en muertas/false/0
// Si tiene 3 vecinos vivos revive
let counterForDeaths = 0;
if( counterForDeaths === 3){
boardNextStage[x][y] = 1;
}

//Caso del centro de la matriz: 8 vecinos.
for (x === 1; x < board.length - 1; x++ ){
  for(y === 1; y < board.length - 1; y++ ){

  }
}

//Caso de las 4 esquinas: 3 vecinos.
if(x === 0 && y === 0){}//A
else if(x === board.length - 1, y === 0){}//B
else if(x === board.length - 1, y === board.length - 1){}//C
else if(x === 0, y === board.length - 1)//D

//Caso de los 4 bloques laterales : 5 veccinos.
if(x === 0){
  for(y === 1; y < board.length - 1, y++){}
}//a
if(y === 0){
  for(x === 1; x < board.length - 1, x++){}
}//b
if(x === board.length - 1){
  for(y === 1; y < board.length - 1, y++){}
}//c
if(y === board.length - 1){
  for(x === 1; x < board.length - 1, x++){}
}//d