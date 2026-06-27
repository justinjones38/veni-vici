import styles from "./BanList.module.css";
import { reducerActions } from "../reducer/reducer";

export default function BanList({ banList, removeFromBanList, dispatch }) {
  return banList.length > 0 ? (
    <div className={styles.container}>
      <h2 className={styles.title}>Ban List</h2>
      <ul className={styles.banList}>
        {banList.map((banItem) => (
          <li className={styles.banItem} key={banItem}>
            <button
              className={styles.banItemBtn}
              onClick={() =>
                dispatch({
                  type: reducerActions.REMOVE_BAN_ITEM,
                  payload: { banItem },
                })
              }
            >
              {banItem}
            </button>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}
