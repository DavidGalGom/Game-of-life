let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
let boardNextTurn = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

/*
[A,b,b,b,B]
[a,E,E,E,c]
[a,E,E,E,c]
[a,E,E,E,c]
[D,d,d,d,C]
*/
function upperLeftCorner() {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[0][0] === 0) {
    counterForDeaths = 0;
    if (board[x][y + 1] === 1) {
      counterForDeaths++;
    } else if (board[x + 1][y] === 1) {
      counterForDeaths++;
    } else if (board[x + 1][y + 1] === 1) {
      counterForDeaths++;
    } else if (counterForDeaths === 3) {
      return (boardNextTurn[x][y] = 1);
    } else if (counterForDeaths !== 3) {
      return (boardNextTurn[x][y] = 0);
    }
  } else if (board[0][0] === 1) {
    counterForAlives = 0;
    if (board[x][y + 1] === 1) {
      counterForAlives++;
    } else if (board[x + 1][y] === 1) {
      counterForAlives++;
    } else if (board[x + 1][y + 1] === 1) {
      counterForAlives++;
    } else if (counterForAlives < 2 || counterForAlives > 3) {
      return (boardNextTurn[x][y] = 0);
    } else if (counterForAlives === 2 || counterForAlives === 3) {
      return (boardNextTurn[x][y] = 1);
    }
  }
}
function upperRightCorner() {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[board.length - 1][0] === 0) {
    counterForDeaths = 0;
    if (board[x - 1][y] === 1) {
      counterForDeaths++;
    } else if (board[x][y + 1] === 1) {
      counterForDeaths++;
    } else if (board[x - 1][y + 1] === 1) {
      counterForDeaths++;
    } else if (counterForDeaths === 3) {
      return (boardNextTurn[x][y] = 1);
    } else if (counterForDeaths !== 3) {
      return (boardNextTurn[x][y] = 0);
    }
  }
  if (board[board.length - 1][0] === 1) {
    counterForAlives = 0;
    if (board[x - 1][y] === 1) {
      counterForAlives++;
    } else if (board[x][y + 1] === 1) {
      counterForAlives++;
    } else if (board[x - 1][y + 1] === 1) {
      counterForAlives++;
    } else if (counterForAlives < 2 || counterForAlives > 3) {
      return (boardNextTurn[x][y] = 0);
    } else if (counterForAlives === 2 || counterForAlives === 3) {
      return (boardNextTurn[x][y] = 1);
    }
  }
}
function lowerRightCorner() {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[board.length - 1][board.length - 1] === 0) {
    counterForDeaths = 0;
    if (board[x - 1][y] === 1) {
      counterForDeaths++;
    } else if (board[x][y - 1] === 1) {
      counterForDeaths++;
    } else if (board[x - 1][y - 1] === 1) {
      counterForDeaths++;
    } else if (counterForDeaths === 3) {
      return (boardNextTurn[x][y] = 1);
    } else if (counterForDeaths !== 3) {
      return (boardNextTurn[x][y] = 0);
    }
  }

  if (board[board.length - 1][board.length - 1] === 1) {
    counterForAlives = 0;
    if (board[x - 1][y] === 1) {
      counterForAlives++;
    } else if (board[x][y - 1] === 1) {
      counterForAlives++;
    } else if (board[x - 1][y - 1] === 1) {
      counterForAlives++;
    } else if (counterForAlives < 2 || counterForAlives > 3) {
      return (boardNextTurn[x][y] = 0);
    } else if (counterForAlives === 2 || counterForAlives === 3) {
      return (boardNextTurn[x][y] = 1);
    }
  }
}
function lowerLeftCorner() {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[0][board.length - 1] === 0) {
    counterForDeaths = 0;
    if (board[x][y - 1] === 1) {
      counterForDeaths++;
    } else if (board[x + 1][y] === 1) {
      counterForDeaths++;
    } else if (board[x + 1][y - 1] === 1) {
      counterForDeaths++;
    } else if (counterForDeaths === 3) {
      return (boardNextTurn[x][y] = 1);
    } else if (counterForDeaths !== 3) {
      return (boardNextTurn[x][y] = 0);
    }
  }

  if (board[0][board.length - 1] === 1) {
    counterForAlives = 0;
    if (board[x][y - 1] === 1) {
      counterForAlives++;
    } else if (board[x + 1][y] === 1) {
      counterForAlives++;
    } else if (board[x + 1][y - 1] === 1) {
      counterForAlives++;
    } else if (counterForAlives < 2 || counterForAlives > 3) {
      return (boardNextTurn[x][y] = 0);
    } else if (counterForAlives === 2 || counterForAlives === 3) {
      return (boardNextTurn[x][y] = 1);
    }
  }
}
function leftBorder() {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[x][y] === 0) {
    counterForDeaths = 0;
    if (board[x][y - 1] === 1) {
      counterForDeaths++;
    } else if (board[x + 1][y - 1] === 1) {
      counterForDeaths++;
    } else if (board[x + 1][y] === 1) {
      counterForDeaths++;
    } else if (board[x][y + 1] === 1) {
      counterForDeaths++;
    } else if (board[x + 1][y + 1] === 1) {
      counterForDeaths++;
    } else if (counterForDeaths === 3) {
      return (boardNextTurn[x][y] = 1);
    } else if (counterForDeaths !== 3) {
      return (boardNextTurn[x][y] = 0);
    }
  }

  if (board[x][y] === 1) {
    counterForAlives = 0;
    if (board[x][y - 1] === 1) {
      counterForAlives++;
    } else if (board[x + 1][y - 1] === 1) {
      counterForAlives++;
    } else if (board[x + 1][y] === 1) {
      counterForAlives++;
    } else if (board[x][y + 1] === 1) {
      counterForAlives++;
    } else if (board[x + 1][y + 1] === 1) {
      counterForAlives++;
    } else if (counterForAlives < 2 || counterForAlives > 3) {
      return (boardNextTurn[x][y] = 0);
    } else if (counterForAlives === 2 || counterForAlives === 3) {
      return (boardNextTurn[x][y] = 1);
    }
  }
}
function topBorder() {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[x][y] === 0) {
    counterForDeaths = 0;
    if (board[x - 1][y] === 1) {
      counterForDeaths++;
    } else if (board[x + 1][y] === 1) {
      counterForDeaths++;
    } else if (board[x - 1][y + 1] === 1) {
      counterForDeaths++;
    } else if (board[x][y + 1] === 1) {
      counterForDeaths++;
    } else if (board[x + 1][y + 1] === 1) {
      counterForDeaths++;
    } else if (counterForDeaths === 3) {
      return (boardNextTurn[x][y] = 1);
    } else if (counterForDeaths !== 3) {
      return (boardNextTurn[x][y] = 0);
    }
  }

  if (board[x][y] === 1) {
    counterForAlives = 0;
    if (board[x - 1][y] === 1) {
      counterForAlives++;
    } else if (board[x + 1][y] === 1) {
      counterForAlives++;
    } else if (board[x - 1][y + 1] === 1) {
      counterForAlives++;
    } else if (board[x][y + 1] === 1) {
      counterForAlives++;
    } else if (board[x + 1][y + 1] === 1) {
      counterForAlives++;
    } else if (counterForAlives < 2 || counterForAlives > 3) {
      return (boardNextTurn[x][y] = 0);
    } else if (counterForAlives === 2 || counterForAlives === 3) {
      return (boardNextTurn[x][y] = 1);
    }
  }
}
function rightBorder() {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[x][y] === 0) {
    counterForDeaths = 0;
    if (board[x - 1][y - 1] === 1) {
      counterForDeaths++;
    } else if (board[x][y - 1] === 1) {
      counterForDeaths++;
    } else if (board[x - 1][y] === 1) {
      counterForDeaths++;
    } else if (board[x - 1][y + 1] === 1) {
      counterForDeaths++;
    } else if (board[x][y + 1] === 1) {
      counterForDeaths++;
    } else if (counterForDeaths === 3) {
      return (boardNextTurn[x][y] = 1);
    } else if (counterForDeaths !== 3) {
      return (boardNextTurn[x][y] = 0);
    }
  }

  if (board[x][y] === 1) {
    counterForAlives = 0;
    if (board[x - 1][y - 1] === 1) {
      counterForAlives++;
    } else if (board[x][y - 1] === 1) {
      counterForAlives++;
    } else if (board[x - 1][y] === 1) {
      counterForAlives++;
    } else if (board[x - 1][y + 1] === 1) {
      counterForAlives++;
    } else if (board[x][y + 1] === 1) {
      counterForAlives++;
    } else if (counterForAlives < 2 || counterForAlives > 3) {
      return (boardNextTurn[x][y] = 0);
    } else if (counterForAlives === 2 || counterForAlives === 3) {
      return (boardNextTurn[x][y] = 1);
    }
  }
}
function bottomBorder() {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[x][y] === 0) {
    counterForDeaths = 0;
    if (board[x - 1][y - 1] === 1) {
      counterForDeaths++;
    } else if (board[x][y - 1] === 1) {
      counterForDeaths++;
    } else if (board[x + 1][y - 1] === 1) {
      counterForDeaths++;
    } else if (board[x - 1][y] === 1) {
      counterForDeaths++;
    } else if (board[x + 1][y] === 1) {
      counterForDeaths++;
    } else if (counterForDeaths === 3) {
      return (boardNextTurn[x][y] = 1);
    } else if (counterForDeaths !== 3) {
      return (boardNextTurn[x][y] = 0);
    }
  }

  if (board[x][y] === 1) {
    counterForAlives = 0;
    if (board[x - 1][y - 1] === 1) {
      counterForAlives++;
    } else if (board[x][y - 1] === 1) {
      counterForAlives++;
    } else if (board[x + 1][y - 1] === 1) {
      counterForAlives++;
    } else if (board[x - 1][y] === 1) {
      counterForAlives++;
    } else if (board[x + 1][y] === 1) {
      counterForAlives++;
    } else if (counterForAlives < 2 || counterForAlives > 3) {
      return (boardNextTurn[x][y] = 0);
    } else if (counterForAlives === 2 || counterForAlives === 3) {
      return (boardNextTurn[x][y] = 1);
    }
  }
}
function centerBoard() {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[x][y] === 0) {
    counterForDeaths = 0;
    if (board[x - 1][y - 1] === 1) {
      counterForDeaths++;
    } else if (board[x][y - 1] === 1) {
      counterForDeaths++;
    } else if (board[x + 1][y - 1] === 1) {
      counterForDeaths++;
    } else if (board[x - 1][y] === 1) {
      counterForDeaths++;
    } else if (board[x + 1][y] === 1) {
      counterForDeaths++;
    } else if (board[x - 1][y + 1] === 1) {
      counterForDeaths++;
    } else if (board[x][y + 1] === 1) {
      counterForDeaths++;
    } else if (board[x + 1][y + 1] === 1) {
      counterForDeaths++;
    } else if (counterForDeaths === 3) {
      return (boardNextTurn[x][y] = 1);
    } else if (counterForDeaths !== 3) {
      return (boardNextTurn[x][y] = 0);
    }
  }
  if (board[x][y] === 1) {
    counterForAlives = 0;
    if (board[x - 1][y - 1] === 1) {
      counterForAlives++;
    } else if (board[x][y - 1] === 1) {
      counterForAlives++;
    } else if (board[x + 1][y - 1] === 1) {
      counterForAlives++;
    } else if (board[x - 1][y] === 1) {
      counterForAlives++;
    } else if (board[x + 1][y] === 1) {
      counterForAlives++;
    } else if (board[x - 1][y + 1] === 1) {
      counterForAlives++;
    } else if (board[x][y + 1] === 1) {
      counterForAlives++;
    } else if (board[x + 1][y + 1] === 1) {
      counterForAlives++;
    } else if (counterForAlives < 2 || counterForAlives > 3) {
      return (boardNextTurn[x][y] = 0);
    } else if (counterForAlives === 2 || counterForAlives === 3) {
      return (boardNextTurn[x][y] = 1);
    }
  }
}
function walkOverTheBoard() {
  let x = 0;
  let y = 0;
  for (x === 0; x < board.length; x++) {
    for (y === 0; y < board.length; y++) {
      if (x === 0 && y === 0) {
        upperLeftCorner(x, y);
      } else if (x === board.length - 1 && y === 0) {
        upperRightCorner(x, y);
      } else if (x === board.length - 1 && y === board.length - 1) {
        lowerRightCorner(x, y);
      } else if (x === 0 && y === board.length - 1) {
        lowerLeftCorner(x, y);
      } else if (x === 0) {
        for (y === 1; y < board.length - 1; y++) {
          leftBorder(x, y);
        }
      } else if (y === 0) {
        for (x === 1; x < board.length - 1; x++) {
          topBorder(x, y);
        }
      } else if (x === board.length - 1) {
        for (y === 1; y < board.length - 1; y++) {
          rightBorder(x, y);
        }
      } else if (y === board.length - 1) {
        for (x === 1; x < board.length - 1; x++) {
          bottomBorder(x, y);
        }
      } else {
        walkOverTheBoard(x, y);
      }
    }
  }
}
walkOverTheBoard(board);
