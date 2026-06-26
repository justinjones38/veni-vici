import styles from "./MainContainer.module.css";

export default function MainContainer({ cat, handleClick }) {
  console.log(cat)
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{cat.name}</h2>
      <div className={styles.featureContainer}>
        <button className={styles.featurebtn}>{cat.breeds[0].name}</button>
        <button className={styles.featurebtn}>{cat.breeds[0].weight.imperial} lbs</button>
        <button className={styles.featurebtn}>{cat.breeds[0].origin}</button>
        <button className={styles.featurebtn}>{cat.breeds[0].life_span} years</button>
      </div>
      <img src={cat.url} alt={cat.breeds[0].name} className={styles.catImg} />
      <button className={styles.primaryBtn} onClick={handleClick}>Discover</button>
    </div>
  );
}
