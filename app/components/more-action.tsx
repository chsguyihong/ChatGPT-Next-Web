/*
 * @Date: 2023-05-25 09:39:06
 * @LastEditTime: 2023-06-06 17:32:58
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
      <div className={styles["more-action-popup"]}>
        <div
          className={styles["more-action-popup-mask"]}
          onClick={props.onClose}
        ></div>
        <div className={styles["more-action-popup-items"]}>
          {props.content.map((item, index) => {
            return (
              <div
                className={styles["more-action-popup-item"]}
                key={item.id}
                onClick={() => handleClick(item.id)}
              >
                {item.icon}
                <p className={styles["more-action-popup-label"]}>
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
