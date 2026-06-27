import styles from "./PrevCatList.module.css";

export default function PrevCatList({ catList }) {
  return catList.length > 0 ? (
    <div className={styles.container}>
      <h2 className={styles.title}>What have we seen so far?</h2>
      <ul className={styles.catList}>
        {catList.map((cat, index) => (
          <li key={index} className={styles.catItem}>
            <img
              src={cat.url}
              alt={cat.breeds[0].name}
              className={styles.catImg}
            />
            <p className={styles.description}>
              {cat.breeds[0].name} from {cat.breeds[0].origin}
            </p>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}
