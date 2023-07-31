import styles from "./InputButtons.module.css";
const InputButton = (props) => {
  const { text, onClick } = props;
  return (
    <div>
      <button className={styles.button} {...onClick}>
        {text}
      </button>
    </div>
  );
};

export default InputButton;
