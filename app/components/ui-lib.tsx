/*
 * @Date: 2023-05-24 09:53:33
 * @LastEditTime: 2023-06-14 10:33:45
 */
import styles from "./ui-lib.module.scss";
import LoadingIcon from "../icons/three-dots.svg";
import CloseIcon from "../icons/close.svg";
import EyeIcon from "../icons/eye.svg";
import EyeOffIcon from "../icons/eye-off.svg";
import DownIcon from "../icons/down.svg";
import { SubmitKey, useAppConfig } from "../store";

import { createRoot } from "react-dom/client";
import React, { HTMLProps, useEffect, useState, useRef } from "react";
import { IconButton } from "./button";

export function Popover(props: {
  children: JSX.Element;
  content: JSX.Element;
  open?: boolean;
  onClose?: () => void;
}) {
  return (
    <div className={styles.popover}>
      {props.children}
      {props.open && (
        <div className={styles["popover-content"]}>
          <div className={styles["popover-mask"]} onClick={props.onClose}></div>
          {props.content}
        </div>
      )}
    </div>
  );
}

export function Card(props: { children: JSX.Element[]; className?: string }) {
  return (
    <div className={styles.card + " " + props.className}>{props.children}</div>
  );
}

export function ListItem(props: {
  title: string;
  subTitle?: string;
  children?: JSX.Element | JSX.Element[];
  icon?: JSX.Element;
  className?: string;
}) {
  return (
    <div className={styles["list-item"] + ` ${props.className || ""}`}>
      <div className={styles["list-header"]}>
        {props.icon && <div className={styles["list-icon"]}>{props.icon}</div>}
        <div className={styles["list-item-title"]}>
          <div>{props.title}</div>
          {props.subTitle && (
            <div className={styles["list-item-sub-title"]}>
              {props.subTitle}
            </div>
          )}
        </div>
      </div>
      {props.children}
    </div>
  );
}

export function List(props: {
  children:
    | Array<JSX.Element | null | undefined>
    | JSX.Element
    | null
    | undefined;
}) {
  return <div className={styles.list}>{props.children}</div>;
}

export function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoadingIcon />
    </div>
  );
}

interface ModalProps {
  title: string;
  children?: JSX.Element | JSX.Element[];
  actions?: JSX.Element[];
  onClose?: () => void;
}
export function Modal(props: ModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        props.onClose?.();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles["modal-container"]}>
      <div className={styles["modal-header"]}>
        <div className={styles["modal-title"]}>{props.title}</div>

        <div className={styles["modal-close-btn"]} onClick={props.onClose}>
          <CloseIcon />
        </div>
      </div>

      <div className={styles["modal-content"]}>{props.children}</div>

      <div className={styles["modal-footer"]}>
        <div className={styles["modal-actions"]}>
          {props.actions?.map((action, i) => (
            <div key={i} className={styles["modal-action"]}>
              {action}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function showModal(props: ModalProps) {
  const div = document.createElement("div");
  div.className = "modal-mask";
  document.body.appendChild(div);

  const root = createRoot(div);
  const closeModal = () => {
    props.onClose?.();
    root.unmount();
    div.remove();
  };

  div.onclick = (e) => {
    if (e.target === div) {
      closeModal();
    }
  };

  root.render(<Modal {...props} onClose={closeModal}></Modal>);
}

export type ToastProps = {
  content: string;
  action?: {
    text: string;
    onClick: () => void;
  };
  onClose?: () => void;
};

export function Toast(props: ToastProps) {
  return (
    <div className={styles["toast-container"]}>
      <div className={styles["toast-content"]}>
        <span>{props.content}</span>
        {props.action && (
          <button
            onClick={() => {
              props.action?.onClick?.();
              props.onClose?.();
            }}
            className={styles["toast-action"]}
          >
            {props.action.text}
          </button>
        )}
      </div>
    </div>
  );
}

export function showToast(
  content: string,
  action?: ToastProps["action"],
  delay = 3000,
) {
  const div = document.createElement("div");
  div.className = styles.show;
  document.body.appendChild(div);

  const root = createRoot(div);
  const close = () => {
    div.classList.add(styles.hide);

    setTimeout(() => {
      root.unmount();
      div.remove();
    }, 300);
  };

  setTimeout(() => {
    close();
  }, delay);

  root.render(<Toast content={content} action={action} onClose={close} />);
}

export type InputProps = React.HTMLProps<HTMLTextAreaElement> & {
  autoHeight?: boolean;
  rows?: number;
};

export function Input(props: InputProps) {
  return (
    <textarea
      {...props}
      className={`${styles["input"]} ${props.className}`}
    ></textarea>
  );
}

export function NormalInput(props: HTMLProps<HTMLInputElement>) {
  return <input {...props} type={"text"} className={"input"} />;
}

export function PasswordInput(props: HTMLProps<HTMLInputElement>) {
  const [visible, setVisible] = useState(false);

  function changeVisibility() {
    setVisible(!visible);
  }

  return (
    <div className={"password-input-container"}>
      <IconButton
        icon={visible ? <EyeIcon /> : <EyeOffIcon />}
        onClick={changeVisibility}
        className={"password-eye"}
      />
      <input
        {...props}
        type={visible ? "text" : "password"}
        className={"password-input"}
      />
    </div>
  );
}

export function Select(
  props: React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >,
) {
  const { className, children, ...otherProps } = props;
  return (
    <div className={`${styles["select-with-icon"]} ${className}`}>
      <select className={styles["select-with-icon-select"]} {...otherProps}>
        {children}
      </select>
      <DownIcon className={styles["select-with-icon-icon"]} />
    </div>
  );
}

export function Tag(
  props: {
    text?: string;
    color?: string;
    background?: string;
    loading?: boolean;
    border?: boolean;
    closeable?: boolean;
    clickTag?: () => void;
    deleteTag?: () => void;
  } & React.DOMAttributes<HTMLDivElement>,
) {
  const colorArr: Array<string> = ["#c41d7f", "#cf1322", "#d46b08", "#389e0d"],
    borderColorArr: Array<string> = [
      "#ffadd2",
      "#ffa39e",
      "#ffd591",
      "#b7eb8f",
    ],
    backgroundColorArr: Array<string> = [
      "#fff0f6",
      "#fff1f0",
      "#fff7e6",
      "#f6ffed",
    ],
    random = () => {
      return Math.floor(Math.random() * (colorArr.length + 1));
    };
  const {
    text,
    color,
    background,
    loading,
    border,
    closeable,
    clickTag,
    deleteTag,
  } = props;
  const inlineStyle = {
    color: color ?? colorArr[random()],
    background: background ?? backgroundColorArr[random()],
    borderColor: !!border ? "transparent" : color ?? borderColorArr[random()],
  };

  return loading ? (
    <LoadingIcon />
  ) : (
    <span className={styles["tag"]} style={inlineStyle} onClick={clickTag}>
      {text ?? "请输入..."}
      {closeable && (
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1694"
          width="1em"
          height="1em"
          onClick={deleteTag}
        >
          <path
            d="M544.448 499.2l284.576-284.576a32 32 0 0 0-45.248-45.248L499.2 453.952 214.624 169.376a32 32 0 0 0-45.248 45.248l284.576 284.576-284.576 284.576a32 32 0 0 0 45.248 45.248l284.576-284.576 284.576 284.576a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0-45.248L544.448 499.2z"
            fill={color ?? "#bfbfbf"}
            p-id="1695"
          ></path>
        </svg>
      )}
    </span>
  );
}

export function TagInput(
  props: {
    text?: string;
    keydown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  } & React.DOMAttributes<HTMLDivElement>,
) {
  const { text, keydown, onBlur } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      console.log(text);
      setInputValue(text ?? "");
    }
  }, [text]);

  return (
    <input
      className={`${styles["tag"]} ${styles["input-tag"]}`}
      ref={inputRef}
      placeholder="请输入"
      value={inputValue}
      onInput={(e) => setInputValue(e.currentTarget.value)}
      onBlur={onBlur}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => keydown(e)}
    />
  );
}
