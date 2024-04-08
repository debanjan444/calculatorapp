import styles from "./Display.module.css";
const Display = (props) => {
  return (
    <input className={styles.display} type="text" value={props.calVal}></input>
  );
};
export default Display;
