/*
 * @Date: 2023-05-25 09:39:06
 * @LastEditTime: 2023-05-25 14:53:00
 */
import { useEffect } from "react";
import styles from "./personal-center.module.scss";
import { useNavigate } from "react-router-dom";
import { Path } from "../constant";

export function PersonalCenterPopup(props: {
  open: boolean;
  content: Array<{ id: number; icon: JSX.Element; label: string }>;
  onClose: () => void;
}) {
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    switch (e) {
      case 1:
        navigate(Path.Account);
        break;
      case 2:
        navigate(Path.Balance);
        break;
      case 3:
        navigate(Path.Collect);
        break;
      case 4:
        navigate(Path.Settings);
        break;
    }
    props.onClose();
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
