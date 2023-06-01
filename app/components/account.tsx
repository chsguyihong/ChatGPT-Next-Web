/*
 * @Date: 2023-05-25 14:26:17
 * @LastEditTime: 2023-06-01 11:03:02
 */
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./account.module.scss";

import { useUpdateStore, useAccessStore, useAppConfig } from "../store";
import Locale from "../locales";
import CloseIcon from "../icons/close.svg";

import { ErrorBoundary } from "./error";
import { Path } from "../constant";
import { IconButton } from "./button";
import { List, ListItem, NormalInput, PasswordInput, Popover } from "./ui-lib";
import { Avatar, AvatarPicker } from "./emoji";

export function Account(props: {}) {
  const navigate = useNavigate();

  const accessStore = useAccessStore();
  const enabledAccessControl = useMemo(
    () => accessStore.enabledAccessControl(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const config = useAppConfig();
  const [showPicker, setShowPicker] = useState(false);

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
          {/* 头像 */}
          <ListItem title={Locale.Account.Avatar}>
            <Popover
              content={
                <AvatarPicker
                  onEmojiClick={(emoji) => {
                    accessStore.updateAvatar(emoji);
                    setShowPicker(false);
                  }}
                ></AvatarPicker>
              }
              open={showPicker}
              onClose={() => setShowPicker(false)}
            >
              <div
                onClick={() => setShowPicker(true)}
                style={{ cursor: "pointer" }}
              >
                <Avatar avatar={accessStore.avatar} />
              </div>
            </Popover>
          </ListItem>
          {/* 昵称 */}
          <ListItem title={Locale.Account.nickName.Title}>
            <NormalInput
              value={accessStore.nickName}
              placeholder={Locale.Account.nickName.Placeholder}
              onChange={(e) => {
                accessStore.updateNickName(e.currentTarget.value);
              }}
            />
          </ListItem>
          {/* 账号 */}
          <ListItem title={Locale.Account.Account.Title}>
            <NormalInput
              value={accessStore.account}
              placeholder={Locale.Account.Account.Placeholder}
              onChange={(e) => {
                accessStore.updateAccount(e.currentTarget.value);
              }}
            />
          </ListItem>
          {/* 密码 */}
          <ListItem title={Locale.Account.Password.Title}>
            <PasswordInput
              value={accessStore.password}
              type="text"
              placeholder={Locale.Account.Password.Placeholder}
              onChange={(e) => {
                accessStore.updatePassword(e.currentTarget.value);
              }}
            />
          </ListItem>
          {/* 访问密码 */}
          {enabledAccessControl ? (
            <ListItem
              title={Locale.Account.AccessCode.Title}
              subTitle={Locale.Account.AccessCode.SubTitle}
            >
              <PasswordInput
                value={accessStore.accessCode}
                type="text"
                placeholder={Locale.Account.AccessCode.Placeholder}
                onChange={(e) => {
                  accessStore.updateCode(e.currentTarget.value);
                }}
              />
            </ListItem>
          ) : (
            <></>
          )}
          {/* APIKey */}
          {!accessStore.hideUserApiKey ? (
            <ListItem
              title={Locale.Account.Token.Title}
              subTitle={Locale.Account.Token.SubTitle}
            >
              <PasswordInput
                value={accessStore.token}
                type="text"
                placeholder={Locale.Account.Token.Placeholder}
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
