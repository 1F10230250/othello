import { Cell } from '../components/Cell';
import { useGame } from '../hooks/useGame';
import styles from './index.module.css';
const Home = () => {
  const { onClick, click_reload, board, turncolor } = useGame();

  return (
    <div className={styles.container}>
      <div className={styles.blackNumber} id="resultGame"/>
        <div className={styles.turn} >
          {{1: '黒' , 2: '白'}[turncolor]}のターン
        </div>
        
      <div className={styles.scores}>
        {/* <div className={styles.pass} onClick={() => clickcell(100, 100)}>
          <p>パス</p>
        </div> */}
        {/* <div id="your-element-id">要素</div> */}
        <div className={styles.blackNumber} id="result-black"/>
        <div className={styles.whiteNumber} id="result-white"/>
      </div>
        <div className={styles.reset} onClick={click_reload}>
          リセット
        </div>
        <div className={styles.board}>
          {board.map((row, y) =>
            row.map((color, x) => (
              <Cell key={`${x}-${y}`} color={color} onClick={() => onClick(x, y)} />
            ))
          )}
        </div>
    </div>
  );
};
export default Home;
