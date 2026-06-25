import styles from "./MainContainer.module.css";

export default function MainContainer({ cat, handeClick }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{cat.name}</h2>
      <p className={styles.description}>Click button to button to add to ban list</p>
      <div className={styles.featureContainer}>
        <button className={styles.featurebtn}>{cat.name}</button>
        <button className={styles.featurebtn}>{cat.weight.imperial} lbs</button>
        <button className={styles.featurebtn}>{cat.origin}</button>
        <button className={styles.featurebtn}>{cat.life_span} years</button>
      </div>
      <img src="https://cdn2.thecatapi.com/images/qf6MhNS8z.jpg" alt={cat.name} className={styles.catImg} />
    </div>
  );
}
