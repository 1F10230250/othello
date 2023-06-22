import { Cell } from '../components/Cell';
import { useGame } from '../hooks/useGame';
import styles from './index.module.css';
const Home = () => {
  const { onClick, click_pass, board } = useGame();

  return (
    <div className={styles.container}>
      {/* <div className={styles.pass} onClick={() => clickcell(100, 100)}>
        <p>パス</p>
      </div> */}
      <div id="your-element-id">要素</div>
      {/* <div className={styles.black_number} id="result-black">
        黒{black}
      </div> */}
      {/* <div className={styles.white_number} id="result-white">
        白{white}
      </div> */}
      <div className={styles.pass} onClick={click_pass}>
        pass
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
