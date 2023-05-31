/*
 * @Date: 2023-05-25 14:26:17
 * @LastEditTime: 2023-05-25 15:19:44
 */
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./account.module.scss";

import { useUpdateStore, useAccessStore } from "../store";
import Locale from "../locales";
import CloseIcon from "../icons/close.svg";

import { ErrorBoundary } from "./error";
import { Path } from "../constant";
import { IconButton } from "./button";
import { List, ListItem, PasswordInput } from "./ui-lib";

export function Account(props: {}) {
  const navigate = useNavigate();

  const accessStore = useAccessStore();
  const enabledAccessControl = useMemo(
    () => accessStore.enabledAccessControl(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <ErrorBoundary>
      <div className="window-header">
        <div className="window-header-title">
          <div className="window-header-main-title">账号设置</div>
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
      <div className={styles["account"]}>
        <List>
          {enabledAccessControl ? (
            <ListItem
              title={Locale.Settings.AccessCode.Title}
              subTitle={Locale.Settings.AccessCode.SubTitle}
            >
              <PasswordInput
                value={accessStore.accessCode}
                type="text"
                placeholder={Locale.Settings.AccessCode.Placeholder}
                onChange={(e) => {
                  accessStore.updateCode(e.currentTarget.value);
                }}
              />
            </ListItem>
          ) : (
            <></>
          )}

          {!accessStore.hideUserApiKey ? (
            <ListItem
              title={Locale.Settings.Token.Title}
              subTitle={Locale.Settings.Token.SubTitle}
            >
              <PasswordInput
                value={accessStore.token}
                type="text"
                placeholder={Locale.Settings.Token.Placeholder}
                onChange={(e) => {
                  accessStore.updateToken(e.currentTarget.value);
                }}
              />
            </ListItem>
          ) : null}
        </List>
      </div>
    </ErrorBoundary>
  );
}
