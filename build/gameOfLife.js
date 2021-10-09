let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0],
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
x = 0;
y = 0;
function upperLeftCorner(board) {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[0][0] === 0) {
    counterForDeaths = 0;
    if (board[x][y + 1] === 1) {
      counterForDeaths++;
    }
    if (board[x + 1][y] === 1) {
      counterForDeaths++;
    }
    if (board[x + 1][y + 1] === 1) {
      counterForDeaths++;
    }
    if (counterForDeaths === 3) {
      return 1;
    }
    if (counterForDeaths !== 3) {
      return 0;
    }
  } else if (board[0][0] === 1) {
    counterForAlives = 0;
    if (board[x][y + 1] === 1) {
      counterForAlives++;
    }
    if (board[x + 1][y] === 1) {
      counterForAlives++;
    }
    if (board[x + 1][y + 1] === 1) {
      counterForAlives++;
    }
    if (counterForAlives < 2 || counterForAlives > 3) {
      return 0;
    }
    if (counterForAlives === 2 || counterForAlives === 3) {
      return 1;
    }
  }
}
function lowerLeftCorner(board) {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[board.length - 1][0] === 0) {
    counterForDeaths = 0;
    if (board[x - 1][y] === 1) {
      counterForDeaths++;
    }
    if (board[x][y + 1] === 1) {
      counterForDeaths++;
    }
    if (board[x - 1][y + 1] === 1) {
      counterForDeaths++;
    }
    if (counterForDeaths === 3) {
      return 1;
    }
    if (counterForDeaths !== 3) {
      return 0;
    }
  }
  if (board[board.length - 1][0] === 1) {
    counterForAlives = 0;
    if (board[x - 1][y] === 1) {
      counterForAlives++;
    }
    if (board[x][y + 1] === 1) {
      counterForAlives++;
    }
    if (board[x - 1][y + 1] === 1) {
      counterForAlives++;
    }
    if (counterForAlives < 2 || counterForAlives > 3) {
      return 0;
    }
    if (counterForAlives === 2 || counterForAlives === 3) {
      return 1;
    }
  }
}
function lowerRightCorner(board) {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[board.length - 1][board.length - 1] === 0) {
    counterForDeaths = 0;
    if (board[x - 1][y] === 1) {
      counterForDeaths++;
    }
    if (board[x][y - 1] === 1) {
      counterForDeaths++;
    }
    if (board[x - 1][y - 1] === 1) {
      counterForDeaths++;
    }
    if (counterForDeaths === 3) {
      return 1;
    }
    if (counterForDeaths !== 3) {
      return 0;
    }
  }

  if (board[board.length - 1][board.length - 1] === 1) {
    counterForAlives = 0;
    if (board[x - 1][y] === 1) {
      counterForAlives++;
    }
    if (board[x][y - 1] === 1) {
      counterForAlives++;
    }
    if (board[x - 1][y - 1] === 1) {
      counterForAlives++;
    }
    if (counterForAlives < 2 || counterForAlives > 3) {
      return 0;
    } else if (counterForAlives === 2 || counterForAlives === 3) {
      return 1;
    }
  }
}
function upperRightCorner(board) {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[0][board.length - 1] === 0) {
    counterForDeaths = 0;
    if (board[x][y - 1] === 1) {
      counterForDeaths++;
    }
    if (board[x + 1][y] === 1) {
      counterForDeaths++;
    }
    if (board[x + 1][y - 1] === 1) {
      counterForDeaths++;
    }
    if (counterForDeaths === 3) {
      return 1;
    }
    if (counterForDeaths !== 3) {
      return 0;
    }
  }

  if (board[0][board.length - 1] === 1) {
    counterForAlives = 0;
    if (board[x][y - 1] === 1) {
      counterForAlives++;
    }
    if (board[x + 1][y] === 1) {
      counterForAlives++;
    }
    if (board[x + 1][y - 1] === 1) {
      counterForAlives++;
    }
    if (counterForAlives < 2 || counterForAlives > 3) {
      return 0;
    }
    if (counterForAlives === 2 || counterForAlives === 3) {
      return 1;
    }
  }
}
function topBorder(board) {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[x][y] === 0) {
    counterForDeaths = 0;
    if (board[x][y - 1] === 1) {
      counterForDeaths++;
    }
    if (board[x + 1][y - 1] === 1) {
      counterForDeaths++;
    }
    if (board[x + 1][y] === 1) {
      counterForDeaths++;
    }
    if (board[x][y + 1] === 1) {
      counterForDeaths++;
    }
    if (board[x + 1][y + 1] === 1) {
      counterForDeaths++;
    }
    if (counterForDeaths === 3) {
      return 1;
    }
    if (counterForDeaths !== 3) {
      return 0;
    }
  }

  if (board[x][y] === 1) {
    counterForAlives = 0;
    if (board[x][y - 1] === 1) {
      counterForAlives++;
    }
    if (board[x + 1][y - 1] === 1) {
      counterForAlives++;
    }
    if (board[x + 1][y] === 1) {
      counterForAlives++;
    }
    if (board[x][y + 1] === 1) {
      counterForAlives++;
    }
    if (board[x + 1][y + 1] === 1) {
      counterForAlives++;
    }
    if (counterForAlives < 2 || counterForAlives > 3) {
      return 0;
    }
    if (counterForAlives === 2 || counterForAlives === 3) {
      return 1;
    }
  }
}
function leftBorder(board) {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[x][y] === 0) {
    counterForDeaths = 0;
    if (board[x - 1][y] === 1) {
      counterForDeaths++;
    }
    if (board[x + 1][y] === 1) {
      counterForDeaths++;
    }
    if (board[x - 1][y + 1] === 1) {
      counterForDeaths++;
    }
    if (board[x][y + 1] === 1) {
      counterForDeaths++;
    }
    if (board[x + 1][y + 1] === 1) {
      counterForDeaths++;
    }
    if (counterForDeaths === 3) {
      return 1;
    }
    if (counterForDeaths !== 3) {
      return 0;
    }
  }

  if (board[x][y] === 1) {
    counterForAlives = 0;
    if (board[x - 1][y] === 1) {
      counterForAlives++;
    }
    if (board[x + 1][y] === 1) {
      counterForAlives++;
    }
    if (board[x - 1][y + 1] === 1) {
      counterForAlives++;
    }
    if (board[x][y + 1] === 1) {
      counterForAlives++;
    }
    if (board[x + 1][y + 1] === 1) {
      counterForAlives++;
    }
    if (counterForAlives < 2 || counterForAlives > 3) {
      return 0;
    }
    if (counterForAlives === 2 || counterForAlives === 3) {
      return 1;
    }
  }
}
function bottomBorder(board) {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[x][y] === 0) {
    counterForDeaths = 0;
    if (board[x - 1][y - 1] === 1) {
      counterForDeaths++;
    }
    if (board[x][y - 1] === 1) {
      counterForDeaths++;
    }
    if (board[x - 1][y] === 1) {
      counterForDeaths++;
    }
    if (board[x - 1][y + 1] === 1) {
      counterForDeaths++;
    }
    if (board[x][y + 1] === 1) {
      counterForDeaths++;
    }
    if (counterForDeaths === 3) {
      return 1;
    }
    if (counterForDeaths !== 3) {
      return 0;
    }
  }

  if (board[x][y] === 1) {
    counterForAlives = 0;
    if (board[x - 1][y - 1] === 1) {
      counterForAlives++;
    }
    if (board[x][y - 1] === 1) {
      counterForAlives++;
    }
    if (board[x - 1][y] === 1) {
      counterForAlives++;
    }
    if (board[x - 1][y + 1] === 1) {
      counterForAlives++;
    }
    if (board[x][y + 1] === 1) {
      counterForAlives++;
    }
    if (counterForAlives < 2 || counterForAlives > 3) {
      return 0;
    }
    if (counterForAlives === 2 || counterForAlives === 3) {
      return 1;
    }
  }
}
function rightBorder(board) {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[x][y] === 0) {
    counterForDeaths = 0;
    if (board[x - 1][y - 1] === 1) {
      counterForDeaths++;
    }
    if (board[x][y - 1] === 1) {
      counterForDeaths++;
    }
    if (board[x + 1][y - 1] === 1) {
      counterForDeaths++;
    }
    if (board[x - 1][y] === 1) {
      counterForDeaths++;
    }
    if (board[x + 1][y] === 1) {
      counterForDeaths++;
    }
    if (counterForDeaths === 3) {
      return 1;
    }
    if (counterForDeaths !== 3) {
      return 0;
    }
  }

  if (board[x][y] === 1) {
    counterForAlives = 0;
    if (board[x - 1][y - 1] === 1) {
      counterForAlives++;
    }
    if (board[x][y - 1] === 1) {
      counterForAlives++;
    }
    if (board[x + 1][y - 1] === 1) {
      counterForAlives++;
    }
    if (board[x - 1][y] === 1) {
      counterForAlives++;
    }
    if (board[x + 1][y] === 1) {
      counterForAlives++;
    }
    if (counterForAlives < 2 || counterForAlives > 3) {
      return 0;
    }
    if (counterForAlives === 2 || counterForAlives === 3) {
      return 1;
    }
  }
}
function centerBoard(board) {
  let counterForAlives = 0;
  let counterForDeaths = 0;
  if (board[x][y] === 0) {
    counterForDeaths = 0;
    if (board[x - 1][y - 1] === 1) {
      counterForDeaths++;
    }
    if (board[x][y - 1] === 1) {
      counterForDeaths++;
    }
    if (board[x + 1][y - 1] === 1) {
      counterForDeaths++;
    }
    if (board[x - 1][y] === 1) {
      counterForDeaths++;
    }
    if (board[x + 1][y] === 1) {
      counterForDeaths++;
    }
    if (board[x - 1][y + 1] === 1) {
      counterForDeaths++;
    }
    if (board[x][y + 1] === 1) {
      counterForDeaths++;
    }
    if (board[x + 1][y + 1] === 1) {
      counterForDeaths++;
    }
    if (counterForDeaths === 3) {
      return 1;
    }
    if (counterForDeaths !== 3) {
      return 0;
    }
  }
  if (board[x][y] === 1) {
    counterForAlives = 0;
    if (board[x - 1][y - 1] === 1) {
      counterForAlives++;
    }
    if (board[x][y - 1] === 1) {
      counterForAlives++;
    }
    if (board[x + 1][y - 1] === 1) {
      counterForAlives++;
    }
    if (board[x - 1][y] === 1) {
      counterForAlives++;
    }
    if (board[x + 1][y] === 1) {
      counterForAlives++;
    }
    if (board[x - 1][y + 1] === 1) {
      counterForAlives++;
    }
    if (board[x][y + 1] === 1) {
      counterForAlives++;
    }
    if (board[x + 1][y + 1] === 1) {
      counterForAlives++;
    }
    if (counterForAlives < 2 || counterForAlives > 3) {
      return 0;
    }
    if (counterForAlives === 2 || counterForAlives === 3) {
      return 1;
    }
  }
}
function walkOverTheBoard(board) {
  for (x = 0; x < board.length; x++) {
    for (y = 0; y < board.length; y++) {
      if (x === 0 && y === 0) {
        boardNextTurn[x][y] = upperLeftCorner(board);
      } else if (x === board.length - 1 && y === 0) {
        boardNextTurn[x][y] = lowerLeftCorner(board);
      } else if (x === board.length - 1 && y === board.length - 1) {
        boardNextTurn[x][y] = lowerRightCorner(board);
      } else if (x === 0 && y === board.length - 1) {
        boardNextTurn[x][y] = upperRightCorner(board);
      } else if (
        x > 0 &&
        x < board.length - 1 &&
        y > 0 &&
        y < board.length - 1
      ) {
        boardNextTurn[x][y] = centerBoard(board);
      } else if (x === 0 && y > 0 && y < board.length) {
        boardNextTurn[x][y] = topBorder(board);
      } else if (y === 0 && x > 0 && x < board.length) {
        boardNextTurn[x][y] = leftBorder(board);
      } else if (x === board.length - 1 && y > 0 && y < board.length) {
        boardNextTurn[x][y] = bottomBorder(board);
      } else if (y === board.length - 1 && x > 0 && x < board.length) {
        boardNextTurn[x][y] = rightBorder(board);
      }
    }
  }
  return boardNextTurn;
}
walkOverTheBoard(board);
console.log(boardNextTurn);
