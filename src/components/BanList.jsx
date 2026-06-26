import styles from "./BanList.module.css";

export default function BanList({banList, removeFromBanList}) {
  console.log(banList);
  return (
    banList.length > 0 ? (
    <div className={styles.container}>
      <h2 className={styles.title}>Ban List</h2>
        <ul className={styles.banList}>
          {banList.map(banItem => (
            <li className={styles.banItem} key={banItem.description}>
              <button className={styles.banItemBtn} onClick={() => removeFromBanList(banItem.type, banItem.description)}>{banItem.description}</button>
            </li>
          ))}
        </ul>
    </div> ) : null
  )
}