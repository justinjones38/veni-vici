import styles from "./App.module.css";
const API_KEY = import.meta.env.VITE_API_KEY;
import { useEffect, useState, useReducer } from "react";
import { fetchCats } from "./api/api";
import Error from "./components/Error";
import MainContainer from "./components/MainContainer";
import PrevCatList from "./components/PrevCatList";
import BanList from "./components/BanList";
import { reducerActions, initialState, reducer } from "./reducer/reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchCats(API_KEY);
        dispatch({ type: reducerActions.GET_DATA, payload: { data } });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
  useEffect(() => {
    fetchData();
  }, []);

  const removeFromBanList = (banItemType, banItemDes) => {
    setBanList((prev) =>
      prev.filter((item) => item.description !== banItemDes),
    );
    const catInfo = catsData.filter(
      (cat) => cat.breeds[0][banItemType] === banItemDes,
    );
    if (workingCatsData.length === 0) {
      setCat(catInfo[Math.floor(Math.random() * catInfo.length)]);
    }
    setWorkingCatsData((prev) => [...prev, ...catInfo]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to veni-vici</h1>
      <p className={styles.contentInfo}>
        Discover the greatest cats of your dreams
      </p>
      {loading ? <h2>Loading ...</h2> : null}
      {error ? <Error /> : null}
      {state.workingCatsData.length === 0 && !loading && !error ? (
        <h2>
          You have viewed all items. Please remove an item from the ban list
        </h2>
      ) : null}

      <div className={styles.contentWrapper}>
        {!loading &&
        !error &&
        state.catsData.length > 0 &&
        state.workingCatsData.length !== 0 ? (
          <MainContainer
            cat={state.currentCat}
            loading={loading}
            banList={state.banList}
            dispatch={dispatch}
            fetchData={fetchData}
          />
        ) : null}

        <BanList
          banList={state.banList}
          removeFromBanList={removeFromBanList}
          dispatch={dispatch}
        />
        <PrevCatList catList={state.prevCatList} />
      </div>
    </div>
  );
}
