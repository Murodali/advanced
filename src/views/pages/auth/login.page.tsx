import React, { useEffect, useState } from "react";
import Components from "../../components";
import { UI } from "../../ui";
import Styles from "./login.page.module.scss";

export const Login: React.FC = (): JSX.Element => {
  const [phoneInput, setPhoneInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      return;
    }
    setPhoneInput(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  const handleLogIn = () => {};

  useEffect(() => {
    if (phoneInput.trim().length < 4) {
      setIsValid(false);
    } else if (passwordInput.trim().length < 4) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [phoneInput, passwordInput]);

  return (
    <Components.Page title="Login">
      <Components.Grid>
        <div className={Styles.left}>
          <form>
            <div className={Styles.intro}>
              <h1>Вход в Хумо Бизнес</h1>
              <p>Введите данные для входа в Интернет-банк </p>
            </div>
            <div className={Styles.input_container}>
              <UI.Input
                value={phoneInput}
                setValue={setPhoneInput}
                onChange={(e) => handlePhoneInput(e)}
                placeHolder="Phone Number"
                hasEyeIcon={false}
                autofocus={true}
              ></UI.Input>
              <UI.Input
                value={passwordInput}
                setValue={setPasswordInput}
                onChange={(e) => handlePasswordInput(e)}
                placeHolder="Password"
                isPassword={true}
                hasEyeIcon={true}
              ></UI.Input>
            </div>
            <div className={Styles.button_row}>
              <UI.Button
                variant="primary"
                onCLick={handleLogIn}
                isSubmit={true}
                disabled={!isValid}
                maxWidth={true}
              >
                Войти
              </UI.Button>
            </div>
          </form>
        </div>
        <div className={Styles.right}></div>
      </Components.Grid>
    </Components.Page>
  );
};
