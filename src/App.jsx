import styles from "./App.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "./../node_modules/@hookform/resolvers/yup/src/yup";

export function App() {
  return (
    <div className={styles.app}>
      <form className={styles.form__app}>
        <input name="email" type="email" className={styles.input__app} />
        {/* <div className={styles.error__label}>Ошибка</div> */}
        <input name="password" type="password" className={styles.input__app} />
        {/* <div className={styles.error__label}>Ошибка</div> */}
        <input
          name="repeatPassword"
          type="password"
          className={styles.input__app}
        />
        {/* <div className={styles.error__label}>Ошибка</div> */}
        <button className={styles.btn__send} type="submit" disabled={false}>
          Отправить
        </button>
      </form>
    </div>
  );
}
