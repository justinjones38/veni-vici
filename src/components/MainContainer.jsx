import styles from "./MainContainer.module.css";

export default function MainContainer({ cat, getNewCat, loading }) {
  console.log(cat.breeds[0].name);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{cat.breeds[0].name}</h2>
      <div className={styles.featureBtnContainer}>
        <button className={styles.featureBtn}>{cat.breeds[0].name}</button>
        <button className={styles.featureBtn}>
          {cat.breeds[0].weight.imperial} lbs
        </button>
        <button className={styles.featureBtn}>{cat.breeds[0].origin}</button>
        <button className={styles.featureBtn}>
          {cat.breeds[0].life_span} years
        </button>
      </div>
      <img src={cat.url} alt={cat.breeds[0].name} className={styles.catImg} />
      <button
        className={styles.primaryBtn}
        onClick={getNewCat}
        disabled={loading}
      >
        Discovery
      </button>
    </div>
  );
}
