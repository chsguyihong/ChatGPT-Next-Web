/*
 * @Date: 2023-05-25 14:26:17
 * @LastEditTime: 2023-05-25 14:43:37
 */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./personal-center.module.scss";

import Locale from "../locales";
import CloseIcon from "../icons/close.svg";

import { ErrorBoundary } from "./error";
import { Path } from "../constant";
import { IconButton } from "./button";

export function Collect(props: {}) {
  const navigate = useNavigate();

  return (
    <ErrorBoundary>
      <div className="window-header">
        <div className="window-header-title">
          <div className="window-header-main-title">收藏</div>
          <div className="window-header-sub-title"></div>
        </div>
        <div className="window-actions">
          <div className="window-action-button">
            <IconButton
              icon={<CloseIcon />}
              onClick={() => navigate(Path.Home)}
              bordered
              title={Locale.Settings.Actions.Close}
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
