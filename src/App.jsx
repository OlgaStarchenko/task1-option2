import styles from "./App.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup.string().required("Введите email").email("Некорректный email"),
  password: yup
    .string()
    .required("Введите пароль")
    .min(6, "Должно быть не менее 6 символов")
    .max(12, "Должно быть не более 12 символов"),
  repeatPassword: yup
    .string()
    .required("Введите пароль повторно")
    .oneOf([yup.ref("password")], "Пароли должны совпадать"),
});

export function App() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.app}>
      <form className={styles.form__app} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          className={styles.input__app}
          {...register("email")}
        />
        {errors.email && (
          <div className={styles.error__label}> {errors.email.message} </div>
        )}
        <input
          type="password"
          className={styles.input__app}
          {...register("password")}
        />
        {errors.password && (
          <div className={styles.error__label}>{errors.password.message}</div>
        )}
        <input
          type="password"
          className={styles.input__app}
          {...register("repeatPassword")}
        />
        {errors.repeatPassword && (
          <div className={styles.error__label}>
            {errors.repeatPassword.message}
          </div>
        )}
        <button className={styles.btn__send} type="submit" disabled={false}>
          Отправить
        </button>
      </form>
    </div>
  );
}
