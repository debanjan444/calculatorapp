import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = (props) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((item) => (
        <button
          onClick={() => props.handlePress(item)}
          key={item}
          className={styles.button}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
