/*
 * @Date: 2023-05-25 14:26:17
 * @LastEditTime: 2023-05-25 15:03:14
 */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./balance.module.scss";

import Locale from "../locales";
import CloseIcon from "../icons/close.svg";
import ResetIcon from "../icons/reload.svg";

import { useUpdateStore, useAccessStore } from "../store";
import { ErrorBoundary } from "./error";
import { Path } from "../constant";
import { IconButton } from "./button";
import { List, ListItem } from "./ui-lib";

export function Balance(props: {}) {
  const navigate = useNavigate();

  const accessStore = useAccessStore();
  const updateStore = useUpdateStore();

  const usage = {
    used: updateStore.used,
    subscription: updateStore.subscription,
  };

  const showUsage = accessStore.isAuthorized();
  useEffect(() => {
    // checks per minutes
    checkUpdate();
    showUsage && checkUsage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [checkingUpdate, setCheckingUpdate] = useState(false);
  function checkUpdate(force = false) {
    setCheckingUpdate(true);
    updateStore.getLatestVersion(force).then(() => {
      setCheckingUpdate(false);
    });
  }

  const [loadingUsage, setLoadingUsage] = useState(false);
  function checkUsage(force = false) {
    setLoadingUsage(true);
    updateStore.updateUsage(force).finally(() => {
      setLoadingUsage(false);
    });
  }

  return (
    <ErrorBoundary>
      <div className="window-header">
        <div className="window-header-title">
          <div className="window-header-main-title">钱包</div>
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
      <div className={styles["content"]}>
        <List>
          <ListItem
            title={Locale.Settings.Usage.Title}
            subTitle={
              showUsage
                ? loadingUsage
                  ? Locale.Settings.Usage.IsChecking
                  : Locale.Settings.Usage.SubTitle(
                      usage?.used ?? "[?]",
                      usage?.subscription ?? "[?]",
                    )
                : Locale.Settings.Usage.NoAccess
            }
          >
            {!showUsage || loadingUsage ? (
              <div />
            ) : (
              <IconButton
                icon={<ResetIcon></ResetIcon>}
                text={Locale.Settings.Usage.Check}
                onClick={() => checkUsage(true)}
              />
            )}
          </ListItem>
        </List>
      </div>
    </ErrorBoundary>
  );
}
