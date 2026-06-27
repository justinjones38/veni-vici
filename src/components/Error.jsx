import styles from "./Error.module.css";

export default function Error() {
  return (
    <h2 className={styles.title}>
      Cannot fetch data. Please refresh the page and try again
    </h2>
  );
}
