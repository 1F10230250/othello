import { useState } from 'react';
import styles from './index.module.css';
const Home = () => {
  let [turncolor, setTurncolor] = useState(1);
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
    turncolor = 3 - turncolor;

    setTurncolor(turncolor);

    console.log('変わったよ', turncolor);
  };

  let stop = 100;
  const clickcell = (x: number, y: number) => {
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

  return (
    <div className={styles.container}>
      {/* <div className={styles.pass} onClick={() => clickcell(100, 100)}>
        <p>パス</p>
      </div> */}
      <div className={styles.pass} onClick={click_pass}>
        pass
      </div>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickcell(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : color === 2 ? '#fff' : '#f00' }}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Home;
