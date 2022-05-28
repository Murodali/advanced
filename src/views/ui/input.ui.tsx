import classNames from "classnames";
import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "../../styles/modules";
import Components from "../components";
import close from "../../assets/images/icons/close.svg";
import eyeOn from "../../assets/images/icons/eye_on.svg";
import eyeOff from "../../assets/images/icons/eye_off.svg";

interface IInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeHolder?: string;
  disabled?: boolean;
  isPassword?: boolean;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  chnageVisibility?: () => void;
  hasEyeIcon: boolean;
  autofocus?: boolean;
}

export const Input: React.FC<IInputProps> = (props): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const className = classNames(
    props.className,
    styles.Input.root,
    (isActive || props.value.trim() !== "") && styles.Input.__active,
    props.hasEyeIcon && styles.Input.__hasEye
  );

  const handleInput = () => {
    props.setValue("");
    setIsActive(false);
  };
  const handleActive = () => {
    if (props.value.length === 0) {
      setIsActive(true);
    }
    return isActive;
  };

  const handleBlur = () => {
    if (props.value.length === 0) {
      setIsActive(false);
    }
    return isActive;
  };
  return (
    <div className={className}>
      <div className={styles.Input.placeholder}>{props.placeHolder}</div>
      <Components.IF
        condition={!props.disabled}
        anotherChildren={
          <div className={styles.Input.disabled_input}>{props.value}</div>
        }
      >
        <input
          type={props.isPassword && !isVisible ? "password" : "text"}
          value={props.value}
          onChange={props.onChange}
          onFocus={handleActive}
          onBlur={handleBlur}
          className={styles.Input.input}
          autoFocus={props.autofocus}
        ></input>
        <div onClick={handleInput} className={styles.Input.close}>
          <img src={close} alt="no image" />
        </div>
        <Components.IF condition={props.hasEyeIcon}>
          <div className={styles.Input.eye}>
            <Components.IF
              condition={isVisible}
              anotherChildren={
                <img
                  src={eyeOn}
                  alt="eye_off"
                  onClick={() => setIsVisible(!isVisible)}
                />
              }
            >
              <img
                src={eyeOff}
                alt="eye_on"
                onClick={() => setIsVisible(!isVisible)}
              />
            </Components.IF>
          </div>
        </Components.IF>
      </Components.IF>
    </div>
  );
};
