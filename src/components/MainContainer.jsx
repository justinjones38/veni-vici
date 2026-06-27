import BanList from "./BanList";
import styles from "./MainContainer.module.css";
import { reducerActions } from "../reducer/reducer";

export default function MainContainer({
  cat,
  getNewCat,
  workingCatsData,
  loading,
  banList,
  dispatch
}) {
  console.log(cat);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{cat.breeds[0].name}</h2>
      <div className={styles.featureBtnContainer}>
        <button
          className={styles.featureBtn}
          onClick={() => dispatch({type: reducerActions.ADD_TO_BAN_LIST, payload:{name: cat.breeds[0].name, type: "name"}})}
          disabled={loading || banList.some(item => item.description  === cat.breeds[0].name)}
        >
          {cat.breeds[0].name}
        </button>
        <button
          className={styles.featureBtn}
          onClick={() => dispatch({type: reducerActions.ADD_TO_BAN_LIST, payload:{name: cat.breeds[0].origin, type: "origin"}})}
          disabled={loading || banList.some(item => item.description  === cat.breeds[0].origin)}
        >
          {cat.breeds[0].origin}
        </button>
        {/* <button
          className={styles.featureBtn}
          onClick={() => addToBanList(cat.breeds[0].weight.imperial)}
          disabled
        >
          {cat.breeds[0].weight.imperial} lbs
        </button>
        <button
          className={styles.featureBtn}
          onClick={() => addToBanList(cat.breeds[0].life_span)}
          disabled
        >
          {cat.breeds[0].life_span} years
        </button> */}
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
