import styles from "./App.module.css";
const API_KEY = import.meta.env.VITE_API_KEY;
import { useEffect, useState } from "react";
import { fetchCats } from "./assets/api/api";

export default function App() {
  const [catsData, setCatsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchCats(API_KEY);
      console.log(data);
      setCatsData(data[0].breeds);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(catsData);
  return (
    <div className={styles.container}>
      <h1>Hello world</h1>
    </div>
  );
}
