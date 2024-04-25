import { useEffect, useState } from 'react';
export const useGame = () => {
  const [turncolor, setTurncolor] = useState(1);
  //prettier-ignore
  const [board, setBoard] = useState([
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,1,2,0,0,0],
  [0,0,0,2,1,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]
  ]);
  let white = 0;
  for (let yaa = 0; yaa <= 7; yaa += 1) {
    for (let xaa = 0; xaa <= 7; xaa += 1) {
      if (board[yaa][xaa] === 2) {
        white += 1;
      }
    }
  }
  let black = 0;
  for (let yaa = 0; yaa <= 7; yaa += 1) {
    for (let xaa = 0; xaa <= 7; xaa += 1) {
      if (board[yaa][xaa] === 1) {
        black += 1;
      }
    }
  }
  useEffect(() => {
    const white_number = white;
    const white_resultElement = document.getElementById('result');
    if (white_resultElement) {
      white_resultElement.textContent = white_number.toString();
    }
    const black_number: number = black;
    const black_resultElement = document.getElementById('result');
    if (black_resultElement) {
      black_resultElement.textContent = black_number.toString();
    }
  }, [white, black]);
  for (let yaa = 0; yaa <= 7; yaa += 1) {
    for (let xaa = 0; xaa <= 7; xaa += 1) {
      if (board[yaa][xaa] === 3) {
        board[yaa][xaa] = 0;
      }
    }
  }
  for (let ya = 0; ya <= 7; ya += 1) {
    for (let xa = 0; xa <= 7; xa += 1) {
      for (let distancey = -1; distancey <= 1; distancey += 1) {
        for (let distancex = -1; distancex <= 1; distancex += 1) {
          if (
            board[ya + distancey] !== undefined &&
            board[xa + distancex] !== undefined &&
            board[ya + distancey][xa + distancex] === 3 - turncolor
          ) {
            for (let distance = 2; distance <= 7; distance += 1) {
              if (
                board[ya + distance * distancey] !== undefined &&
                board[xa + distance * distancex] !== undefined &&
                board[ya + distance * distancey][xa + distance * distancex] === 0
              ) {
                break;
              }
              if (
                board[ya + distance * distancey] !== undefined &&
                board[xa + distance * distancex] !== undefined &&
                board[ya + distance * distancey][xa + distance * distancex] === turncolor
              ) {
                if (board[ya][xa] === 0 || board[ya][xa] === 3) {
                  board[ya][xa] = 3;
                }
              }
            }
          }
        }
      }
    }
  }

  const click_pass = () => {
    setTurncolor(3 - turncolor);

    console.log('変わったよ', turncolor);
  };

  let stop = 100;
  const onClick = (x: number, y: number) => {
    if (x === 100 && y === 100) {
      console.log('pass!');
    }
    console.log(x, y);
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));
    if ((y !== 100 && x !== 100 && board[y][x] === 0) || board[y][x] === 3) {
      for (let distancey = -1; distancey <= 1; distancey += 1) {
        for (let distancex = -1; distancex <= 1; distancex += 1) {
          if (
            board[y + distancey] !== undefined &&
            board[x + distancex] !== undefined &&
            board[y + distancey][x + distancex] === 3 - turncolor
          ) {
            for (let distance = 2; distance <= 7; distance += 1) {
              if (stop === 50) {
                stop = 100;
                break;
              }
              if (
                board[y + distance * distancey] !== undefined &&
                board[x + distance * distancex] !== undefined &&
                board[y + distance * distancey][x + distance * distancex] === 0
              ) {
                break;
              }
              if (
                board[y + distance * distancey] !== undefined &&
                board[x + distance * distancex] !== undefined &&
                board[y + distance * distancey][x + distance * distancex] === turncolor
              ) {
                for (let turn = 0; turn <= distance; turn += 1) {
                  newBoard[y + turn * distancey][x + turn * distancex] = turncolor;
                  stop = 50;
                }
                setTurncolor(3 - turncolor);
              }
            }
          }
        }
      }
    }
    setBoard(newBoard);
  };
  return { click_pass, board, onClick, turncolor, black, white };
};
