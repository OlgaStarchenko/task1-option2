import styles from "./App.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export function App() {
  const {
    register,
    handleSubmit,
    formData: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.app}>
      <form className={styles.form__app} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          className={styles.input__app}
          {...register("email")}
        />
        {/* <div className={styles.error__label}>Ошибка</div> */}
        <input
          type="password"
          className={styles.input__app}
          {...register("password")}
        />
        {/* <div className={styles.error__label}>Ошибка</div> */}
        <input
          type="password"
          className={styles.input__app}
          {...register("repeatPassword")}
        />
        {/* <div className={styles.error__label}>Ошибка</div> */}
        <button className={styles.btn__send} type="submit" disabled={false}>
          Отправить
        </button>
      </form>
    </div>
  );
}
