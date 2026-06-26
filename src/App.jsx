import styles from "./App.module.css";
const API_KEY = import.meta.env.VITE_API_KEY;
import { useEffect, useState } from "react";
import { fetchCats } from "./assets/api/api";
import Error from "./components/Error";
import MainContainer from "./components/MainContainer";
import PrevCatList from "./components/PrevCatList";

export default function App() {
  const [catsData, setCatsData] = useState([]);
  const [cat, setCat] = useState(null);
  const [prevCatList, setPrevCatList] = useState([]);
  const [banList, setBanList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchCats(API_KEY);
      setCatsData(data);
      let randomIndex = Math.floor(Math.random() * catsData.length);
      setCat(data[randomIndex]);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
  }, []);

  console.log(catsData);



  const handleClick = () => {
    setPrevCatList(prev => [cat, ...prev]);
    let randomIndex = Math.floor(Math.random() * catsData.length);
    console.log(catsData);
    setCat(catsData[randomIndex]);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to veni-vici</h1>
      <p className={styles.contentInfo}>Discover the greatest cats of your dreams</p>
      {loading ? <p>Loading ...</p> : null}
      {error ? <Error /> : null}
      {!loading && !error && catsData.length > 0 ? (
        <div className={styles.contentWrapper}>
          <MainContainer cat={cat} handleClick={handleClick} />
          <PrevCatList catList={prevCatList} />
        </div>
      ) : null}
    </div>
  );
}
