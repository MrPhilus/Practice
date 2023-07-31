import styles from "./InputField.module.css";

const InputField = () => {
  return (
    <div>
      <input className={styles.display} type="number" min={0} />
    </div>
  );
};
export default InputField;
