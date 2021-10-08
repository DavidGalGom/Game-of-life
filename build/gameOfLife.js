let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
let boardNextTurn = [];

/*
[A,b,b,b,B]
[a,E,E,E,c]
[a,E,E,E,c]
[a,E,E,E,c]
[D,d,d,d,C]
*/

//Para las celdas vivas/true/1 
//Si tiene 2 o 3 vecinos vivos sigue vivo, sino muere
let counterForAlives = 0;
if (counterForAlives < 2 || counterForAlives > 3){
 boardNextTurn[x][y] = 0;
}
else if (counterForAlives === 2 || counterForAlives === 3){
boardNextTurn[x][y] = 1;
}

//Para las celdas muertas/false/0
// Si tiene 3 vecinos vivos revive
let counterForDeaths = 0;
if( counterForDeaths === 3){
boardNextTurn[x][y] = 1;
}

//Caso del centro de la matriz: 8 vecinos (E)
for (x === 1; x < board.length - 1; x++ ){
  for(y === 1; y < board.length - 1; y++ ){
  }
}
//Buscador de vecinos.
//Caso A:
for (x === 1; x < board.length - 1; x++ ){
  for(y === 1; y < board.length - 1; y++ ){
    if(board[x][y] === 0){
      counterForDeaths = 0;
      if(board[x - 1][y - 1] === 1){
      counterForDeaths++;
      }
      else if(board[x][y - 1] === 1){
      counterForDeaths++;
      }
      else if(board[x + 1][y - 1] === 1){
      counterForDeaths++;
      }
      else if(board[x - 1][y] === 1){
      counterForDeaths++;
      }
      else if(board[x + 1][y] === 1){
      counterForDeaths++;
      }
      else if(board[x - 1][y + 1] === 1){
      counterForDeaths++;
      }
      else if(board[x][y + 1] === 1){
      counterForDeaths++;
      }
      else if(board[x + 1][y + 1] === 1){
      counterForDeaths++;
      }
    }
    else if(board[x][y] === 1){
      counterForAlives = 0;
      if(board[x - 1][y - 1] === 1){
      counterForAlives++;
      }
      else if(board[x][y - 1] === 1){
      counterForAlives++;
      }
      else if(board[x + 1][y - 1] === 1){
      counterForAlives++;
      }
      else if(board[x - 1][y] === 1){
      counterForAlives++;
      }
      else if(board[x + 1][y] === 1){
      counterForAlives++;
      }
      else if(board[x - 1][y + 1] === 1){
      counterForAlives++;
      }
      else if(board[x][y + 1] === 1){
      counterForAlives++;
      }
      else if(board[x + 1][y + 1] === 1){
      counterForAlives++;
    }
  }
}
//Caso de las 4 esquinas: 3 vecinos.
if(x === 0 && y === 0){}//A
else if(x === board.length - 1, y === 0){}//B
else if(x === board.length - 1, y === board.length - 1){}//C
else if(x === 0, y === board.length - 1)//D
//Buscador de vecinos.
//Caso A:
if(board[0][0] === 0){
counterForDeaths = 0;
if(board[x][y + 1] === 1){
counterForDeaths++;
}
else if(board[x + 1][y] === 1){
counterForDeaths++;
}
else if(board[x + 1][y + 1] === 1){
counterForDeaths++;
}
}

if(board[0][0] === 1){
counterForAlives = 0;
if(board[x][y + 1] === 1){
counterForAlives++;
}
else if(board[x + 1][y] === 1){
counterForAlives++;
}
else if(board[x + 1][y + 1] === 1){
counterForAlives++;
}
}
//Caso B:
if(board[board.length - 1][0] === 0){
counterForDeaths = 0;
if(board[x - 1][y] === 1){
counterForDeaths++;
}
else if(board[x][y + 1] === 1){
counterForDeaths++;
}
else if(board[x - 1][y + 1] === 1){
counterForDeaths++;
}
}

if(board[board.length - 1][0] === 1){
counterForAlives = 0;
if(board[x - 1][y] === 1){
counterForAlives++;
}
else if(board[x][y + 1] === 1){
counterForAlives++;
}
else if(board[x - 1][y + 1] === 1){
counterForAlives++;
}
}
//Caso C
if(board[board.length - 1][board.length - 1] === 0){
counterForDeaths = 0;
if(board[x - 1][y] === 1){
counterForDeaths++;
}
else if(board[x][y - 1] === 1){
counterForDeaths++;
}
else if(board[x - 1][y - 1] === 1){
counterForDeaths++;
}
}

if(board[board.length - 1][board.length - 1] === 1){
counterForAlives = 0;
if(board[x - 1][y] === 1){
counterForAlives++;
}
else if(board[x][y - 1] === 1){
counterForAlives++;
}
else if(board[x - 1][y - 1] === 1){
counterForAlives++;
}
}
//Caso D
if(board[0][board.length - 1] === 0){
counterForDeaths = 0;
if(board[x][y - 1] === 1){
counterForDeaths++;
}
else if(board[x + 1][y] === 1){
counterForDeaths++;
}
else if(board[x + 1][y - 1] === 1){
counterForDeaths++;
}
}

if(board[0][board.length - 1] === 1){
counterForAlives = 0;
if(board[x][y - 1] === 1){
counterForAlives++;
}
else if(board[x + 1][y] === 1){
counterForAlives++;
}
else if(board[x + 1][y - 1] === 1){
counterForAlives++;
}
}
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