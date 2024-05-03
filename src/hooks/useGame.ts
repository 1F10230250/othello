import { useEffect, useState } from 'react';
export const useGame = () => {
  const [turncolor, setTurncolor] = useState(1);
  //prettier-ignore
 
  //setBoardで盤面更新
  const [board, setBoard] = useState([ 
    //1が黒、２が白
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,1,2,0,0,0],
  [0,0,0,2,1,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]
  ]);

  //white=白駒の数
  let white = 0;
  //xaa=x座標　yaa=y座標
  for (let yaa = 0; yaa <= 7; yaa += 1) {
    for (let xaa = 0; xaa <= 7; xaa += 1) {
      if (board[yaa][xaa] === 2) {
        white += 1;
      }
    }
  }

  //black＝黒駒の数
  let black = 0;
  for (let yaa = 0; yaa <= 7; yaa += 1) {
    for (let xaa = 0; xaa <= 7; xaa += 1) {
      if (board[yaa][xaa] === 1) {
        black += 1;
      }
    }
  }

  //white,blackの変更を条件に発火
  useEffect(() => {
    const white_number = white;
    
    const white_resultElement = document.getElementById('result-white');
    if (white_resultElement) {
      white_resultElement.textContent ='白' + white_number.toString();
    }
    const black_number: number = black;
    const black_resultElement = document.getElementById('result-black');
    if (black_resultElement) {
      black_resultElement.textContent ='黒' + black_number.toString();
    }
  }, [white, black]);

  const click_reload = () => {
    window.location.reload();
    console.log("リセットしました")
  };

  //flag
  let stop = 100;

  //passボタン（実装してない）
  const onClick = (x: number, y: number) => {
    if (x === 100 && y === 100) {
      console.log('pass!');
    }
    //置いた座標の表示
    console.log(x+1, y+1);
    
    //更新後のボード定義
    //新しいボードに前ボードの情報をコピー
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));
    
    //クリックした場所が置ける状態か確認
    if ((y !== 100 && x !== 100 && board[y][x] === 0) || board[y][x] === 3) {
        //石を置けるところの初期化
      for (let yaa = 0; yaa <= 7; yaa += 1) {
        for (let xaa = 0; xaa <= 7; xaa += 1) {
          if (board[yaa][xaa] === 3) {
            board[yaa][xaa] = 0;
          }
        }
      }
      //お隣の石について
      for (let distancey = -1; distancey <= 1; distancey += 1) {
        for (let distancex = -1; distancex <= 1; distancex += 1) {
          if (
            //定義域外じゃないか確認
            board[y + distancey] !== undefined &&
            board[x + distancex] !== undefined &&
            //置いてあるのが他色か確認
            board[y + distancey][x + distancex] === 3 - turncolor
          ) {

            for (let distance = 2; distance <= 7; distance += 1) {
              // if (stop === 50) {
              //   stop = 100;
              //   break;
              // }
              if (
                //定義域外じゃないか確認
                board[y + distance * distancey] !== undefined &&
                board[x + distance * distancex] !== undefined &&
                //そこに何も置いてないか確認
                board[y + distance * distancey][x + distance * distancex] === 0
              ) {
                break;
              }

              //距離distanceに自色の石があったら間を全部ひっくり返す
              else if (
                //定義域外じゃないか確認
                board[y + distance * distancey] !== undefined &&
                board[x + distance * distancex] !== undefined &&
                //置いてあるのが自色の石か確認
                board[y + distance * distancey][x + distance * distancex] === turncolor
              ) {
                //ひっくり返す
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

  //石を置けるところの初期化
  for (let yaa = 0; yaa <= 7; yaa += 1) {
    for (let xaa = 0; xaa <= 7; xaa += 1) {
      if (board[yaa][xaa] === 3) {
        board[yaa][xaa] = 0;
      }
    }
  }

  //石を置く
  for (let ya = 0; ya <= 7; ya += 1) {
    for (let xa = 0; xa <= 7; xa += 1) {
      
      //置く場所の確認
      for (let distancey = -1; distancey <= 1; distancey += 1) {
        for (let distancex = -1; distancex <= 1; distancex += 1) {
          if (
            //定義域外じゃないか確認
            board[ya + distancey] !== undefined &&
            board[xa + distancex] !== undefined &&
            //隣が他色か確認
            board[ya + distancey][xa + distancex] === 3 - turncolor
          ) {
            //自石が置けるか確認
            for (let distance = 2; distance <= 7; distance += 1) {

              //置いてない場合
              if (
                //定義域外じゃないか確認
                board[ya + distance * distancey] !== undefined &&
                board[xa + distance * distancex] !== undefined &&
                //そこに何も置いてないか確認
                board[ya + distance * distancey][xa + distance * distancex] === 0
              ) {
                break;
              }
              
              //置いてあった場合
              else if (
                //定義域外じゃないか確認
                board[ya + distance * distancey] !== undefined &&
                board[xa + distance * distancex] !== undefined &&
                //置いてあるのが自色の石か確認
                board[ya + distance * distancey][xa + distance * distancex] === turncolor
              ) {
                //置ける場所として赤表示
                if (board[ya][xa] === 0) {
                  board[ya][xa] = 3;
                }
              }
            }
          }
        }
      }
    }
  }

  let  myTurnColor ;
  if (turncolor == 1){
    myTurnColor = "黒";
  }
  else{
    myTurnColor = "白";
  }
  return { click_reload, board, onClick, turncolor};
};
