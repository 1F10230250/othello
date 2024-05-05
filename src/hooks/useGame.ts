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

  const [passBlackCount, setBlackPassCount] = useState(0);
  const [passWhiteCount, setWhitePassCount] = useState(0);

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

  const click_reload = () => {
    setBoard([ 
        //1が黒、２が白
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,1,2,0,0,0],
      [0,0,0,2,1,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0]
    ])
    setTurncolor(1);
    console.log("リセットしました");
    const result = document.getElementById('resultGame');
    if (result) {
      result.textContent ='';
    }
    setBlackPassCount(0);
    setWhitePassCount(0);
    // const result = document.getElementById('resultGame');
    // result.textContent ='黒のターン';
  };

  //flag
  let stop = 100;

  //     //キープ用ボードに前ボードの情報をコピー
  // const keepBoard: number[][] = JSON.parse(JSON.stringify(board));
  // setBoard(keepBoard);
  // const click_back = () => {

  // }

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
                  //flagを50に
                  stop = 50;
                  const result = document.getElementById('resultGame');
                  if (result) {
                    result.textContent ='';
                  }
                }
                if (turncolor === 1) {
                  if (passBlackCount === 1) {
                    setBlackPassCount(0);
                  }
                }
                if (turncolor === 2) {
                  if (passWhiteCount === 1) {
                    setWhitePassCount(0);
                  }
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

  let passValue: number = 0;
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
            //自石が置いてあるか確認
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
              if (
                //定義域外じゃないか確認
                board[ya + distance * distancey] !== undefined &&
                board[xa + distance * distancex] !== undefined &&
                //そこに何も置いてないか確認
                board[ya + distance * distancey][xa + distance * distancex] === 3
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
                  passValue += 1;
                }
              }
            }
          }
        }
      }
    }
  }
  if (passValue === 0) {
    if (white === 0 || black === 0) {
      passValue = 1;
      console.log("0");
    }
    if (passValue === 0) {
      setTurncolor(3 - turncolor);
      if (passBlackCount === 2 || passWhiteCount === 2) {
        setBlackPassCount(0);
        setWhitePassCount(0);        
      }
      if (turncolor === 1) {
        setBlackPassCount(passBlackCount + 1);
        const result = document.getElementById('resultGame');
        if (result) {
          result.textContent ='黒パス';
        }
      }
      if (turncolor === 2) {
        setWhitePassCount(passWhiteCount + 1);
        const result = document.getElementById('resultGame');
        if (result) {
          result.textContent ='白パス';
        }
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
    const result = document.getElementById('resultGame');
    if (passBlackCount === 2 || passWhiteCount === 2) {
      console.log("勝負あり！")
      if (result && turncolor === 1) {
        result.textContent ='黒の勝ち';
      }
      else if (result && turncolor === 2) {
        result.textContent ='白の勝ち';
      }
    }
    if (black_resultElement) {
      black_resultElement.textContent ='黒' + black_number.toString();
    }
    if (result && black === 0) {
      result.textContent ='白の勝ち';
    }
    if (result && white === 0) {
      result.textContent ='黒の勝ち';
    }
    console.log("動いたよ");
    console.log(passBlackCount);
    console.log(passWhiteCount);
    console.log(turncolor);
  }, [white, black]);
  return { click_reload, board, onClick, turncolor };
};
