import styles from "./App.module.css";
const API_KEY = import.meta.env.VITE_API_KEY;
import { useEffect, useState } from "react";
import { fetchCats } from "./assets/api/api";
import Error from "./components/Error";
import MainContainer from "./components/MainContainer";
import PrevCatList from "./components/PrevCatList";
import BanList from "./components/BanList";

export default function App() {
  const [catsData, setCatsData] = useState([]);
  const [workingCatsData, setWorkingCatsData] = useState(catsData);
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
        setWorkingCatsData(data);
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

  const addToBanList = (banItemType, banItemDes) => {
    console.log(banItemType, banItemDes);
    setBanList(prev => !prev.some(prevItem => prevItem[banItemType] === banItemDes) ? [...prev, {type: banItemType, description: banItemDes}] : prev);
    setWorkingCatsData((prev) =>
      prev.filter((cat) => cat.breeds[0][banItemType] !== banItemDes),
    );
  };
  console.log(banList);
  console.log(workingCatsData);
  const removeFromBanList = (itemName, item) => {
    setBanList((prev) => prev.filter((item) => item !== banItem));
    const catInfo = catsData.filter((cat) => cat.breeds[0][itemName] === item);
    setWorkingCatsData((prev) => [...prev, ...catInfo]);
  };
  console.log(workingCatsData.length);

  const getNewCat = () => {
    setLoading(true);
    setPrevCatList((prev) => [cat, ...prev]);
    let randomIndex = Math.floor(Math.random() * workingCatsData.length);
    setCat(workingCatsData[randomIndex]);
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to veni-vici</h1>
      <p className={styles.contentInfo}>
        Discover the greatest cats of your dreams
      </p>
      {loading ? <p>Loading ...</p> : null}
      {error ? <Error /> : null}
      {workingCatsData.length === 0 && !loading && !error ? (
        <h2>
          You have viewed all items. Please remove an item from the ban list
        </h2>
      ) : null}

        <div className={styles.contentWrapper}>
          {!loading && !error && catsData.length > 0 && workingCatsData.length !== 0 ? (
          <MainContainer
            cat={cat}
            getNewCat={getNewCat}
            loading={loading}
            banList={banList}
            addToBanList={addToBanList}
          /> ) : null}

          <BanList banList={banList} removeFromBanList={removeFromBanList} />
          <PrevCatList catList={prevCatList} />
        </div>
      
    </div>
  );
}
