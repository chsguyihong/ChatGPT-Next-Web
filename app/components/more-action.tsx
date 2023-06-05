/*
 * @Date: 2023-05-25 09:39:06
 * @LastEditTime: 2023-06-02 14:43:49
 */
import { useEffect } from "react";
import styles from "./more-action.module.scss";

export function MoreActionPopup(props: {
  open: boolean;
  content: Array<{ id: number; icon: JSX.Element; label: string }>;
  onClose: (e: any) => void;
}) {
  const handleClick = (e: any) => {
    props.onClose(e);
  };

  if (props.open) {
    return (
      <div className={styles["personal-center-popup"]}>
        <div
          className={styles["personal-center-popup-mask"]}
          onClick={props.onClose}
        ></div>
        <div className={styles["personal-center-popup-items"]}>
          {props.content.map((item, index) => {
            return (
              <div
                className={styles["personal-center-popup-item"]}
                key={item.id}
                onClick={() => handleClick(item.id)}
              >
                {item.icon}
                <p className={styles["personal-center-popup-label"]}>
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return <></>;
}
