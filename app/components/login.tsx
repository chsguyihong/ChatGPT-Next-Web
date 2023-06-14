/*
 * @Date: 2023-05-25 14:26:17
 * @LastEditTime: 2023-06-14 18:09:31
 */
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.scss";

import { useAccessStore, useAppConfig } from "../store";
import Locale from "../locales";

import { ErrorBoundary } from "./error";
import { Path } from "../constant";
import { IconButton } from "./button";
import { NormalInput, PasswordInput, Popover } from "./ui-lib";
import DownIcon from "../icons/down.svg";
import { useMobileScreen } from "../utils";

export function Login(props: {}) {
  const navigate = useNavigate();

  return (
    <ErrorBoundary>
      <div className={styles["login"]}>
        <div className={styles["login-form"]}>
          <p className={styles["login-form-title"]}>
            {Locale.Login.loginTitle}
          </p>

          <div className={styles["login-form-account"]}>
            <div className={styles["input-icon"]}>
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1725"
                width="20"
                height="20"
              >
                <path
                  d="M665.69 554.94C736 506.25 782 425.11 782 333.22 782 184.3 661.12 63.56 512 63.56S242 184.3 242 333.22c0 91.89 46 173 116.31 221.72C222.74 614.14 128 749.27 128 906.5q0 6.27 0.21 12.48c0 1.41 0.09 2.82 0.15 4.22a40.05 40.05 0 0 0 79.93-3.64v-0.44c0-0.72-0.06-1.43-0.08-2.15-0.12-3.48-0.2-7-0.2-10.47 0-167.68 136.11-303.61 304-303.61S816 738.82 816 906.5c0 3.42-0.08 6.83-0.19 10.22 0 0.93-0.07 1.85-0.11 2.78a40.05 40.05 0 0 0 79.95 3.41c0.05-1.3 0.1-2.6 0.14-3.9q0.21-6.22 0.21-12.51c0-157.23-94.74-292.36-230.31-351.56zM322 333.22c0-104.8 85.07-189.76 190-189.76s190 85 190 189.76S616.93 523 512 523s-190-85-190-189.78z"
                  fill="#999999"
                  p-id="1726"
                ></path>
              </svg>
            </div>
            <NormalInput placeholder={Locale.Login.account.placeholder} />
          </div>

          <div className={styles["login-form-password"]}>
            <div className={styles["input-icon"]}>
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1755"
                width="128"
                height="128"
              >
                <path
                  d="M868.593046 403.832442c-30.081109-28.844955-70.037123-44.753273-112.624057-44.753273L265.949606 359.079168c-42.554188 0-82.510202 15.908318-112.469538 44.690852-30.236652 28.782533-46.857191 67.222007-46.857191 108.198258l0 294.079782c0 40.977273 16.619516 79.414701 46.702672 108.136859 29.959336 28.844955 70.069869 44.814672 112.624057 44.814672l490.019383 0c42.585911 0 82.696444-15.969717 112.624057-44.814672 30.082132-28.844955 46.579875-67.222007 46.579875-108.136859L915.172921 511.968278C915.171897 471.053426 898.675178 432.677397 868.593046 403.832442zM841.821309 806.049083c0 22.098297-8.882298 42.772152-25.099654 58.306964-16.154935 15.661701-37.81935 24.203238-60.752666 24.203238L265.949606 888.559285c-22.934339 0-44.567032-8.54256-60.877509-24.264637-16.186657-15.474436-25.067932-36.148291-25.067932-58.246589L180.004165 511.968278c0-22.035876 8.881274-42.772152 25.192775-58.307987 16.186657-15.536858 37.81935-24.139793 60.753689-24.139793l490.019383 0c22.933315 0 44.597731 8.602935 60.752666 24.139793 16.21838 15.535835 25.099654 36.272112 25.099654 58.307987L841.822332 806.049083zM510.974136 135.440715c114.914216 0 208.318536 89.75214 208.318536 200.055338l73.350588 0c0-149.113109-126.366036-270.496667-281.669124-270.496667-155.333788 0-281.699824 121.383558-281.699824 270.496667l73.350588 0C302.623877 225.193879 396.059919 135.440715 510.974136 135.440715zM474.299865 747.244792l73.350588 0L547.650453 629.576859l-73.350588 0L474.299865 747.244792z"
                  fill="#808080"
                  p-id="1756"
                ></path>
              </svg>
            </div>
            <PasswordInput placeholder={Locale.Login.password.placeholder} />
          </div>

          <button className={styles["login-form-confirm"]}>
            {Locale.Login.confirm}
          </button>

          <div className={styles["login-form-actions"]}>
            <p
              className={styles["login-form-action"]}
              onClick={() => navigate(Path.ForgetPass)}
            >
              {Locale.Login.forgetPass}
            </p>
            <p
              className={styles["login-form-action"]}
              onClick={() => navigate(Path.Register)}
            >
              {Locale.Login.register}
            </p>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export function ForgetPass(props: {}) {
  const navigate = useNavigate();

  return (
    <ErrorBoundary>
      <div className={styles["forget"]}>
        <div className={styles["forget-form"]}>
          <p className={styles["forget-form-title"]}>
            {Locale.Login.forgetPass}
          </p>

          <div className={styles["forget-form-phone"]}>
            <div className={styles["input"]}>
              <div className={styles["input-icon"]}>
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1725"
                  width="20"
                  height="20"
                >
                  <path
                    d="M665.69 554.94C736 506.25 782 425.11 782 333.22 782 184.3 661.12 63.56 512 63.56S242 184.3 242 333.22c0 91.89 46 173 116.31 221.72C222.74 614.14 128 749.27 128 906.5q0 6.27 0.21 12.48c0 1.41 0.09 2.82 0.15 4.22a40.05 40.05 0 0 0 79.93-3.64v-0.44c0-0.72-0.06-1.43-0.08-2.15-0.12-3.48-0.2-7-0.2-10.47 0-167.68 136.11-303.61 304-303.61S816 738.82 816 906.5c0 3.42-0.08 6.83-0.19 10.22 0 0.93-0.07 1.85-0.11 2.78a40.05 40.05 0 0 0 79.95 3.41c0.05-1.3 0.1-2.6 0.14-3.9q0.21-6.22 0.21-12.51c0-157.23-94.74-292.36-230.31-351.56zM322 333.22c0-104.8 85.07-189.76 190-189.76s190 85 190 189.76S616.93 523 512 523s-190-85-190-189.78z"
                    fill="#999999"
                    p-id="1726"
                  ></path>
                </svg>
              </div>
              <NormalInput placeholder={Locale.Login.phone.placeholder} />
            </div>
            <button className={styles["input-code-btn"]}>
              {Locale.Login.getCode}
            </button>
          </div>

          <div className={styles["forget-form-code"]}>
            <div className={styles["input-icon"]}>
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1755"
                width="128"
                height="128"
              >
                <path
                  d="M868.593046 403.832442c-30.081109-28.844955-70.037123-44.753273-112.624057-44.753273L265.949606 359.079168c-42.554188 0-82.510202 15.908318-112.469538 44.690852-30.236652 28.782533-46.857191 67.222007-46.857191 108.198258l0 294.079782c0 40.977273 16.619516 79.414701 46.702672 108.136859 29.959336 28.844955 70.069869 44.814672 112.624057 44.814672l490.019383 0c42.585911 0 82.696444-15.969717 112.624057-44.814672 30.082132-28.844955 46.579875-67.222007 46.579875-108.136859L915.172921 511.968278C915.171897 471.053426 898.675178 432.677397 868.593046 403.832442zM841.821309 806.049083c0 22.098297-8.882298 42.772152-25.099654 58.306964-16.154935 15.661701-37.81935 24.203238-60.752666 24.203238L265.949606 888.559285c-22.934339 0-44.567032-8.54256-60.877509-24.264637-16.186657-15.474436-25.067932-36.148291-25.067932-58.246589L180.004165 511.968278c0-22.035876 8.881274-42.772152 25.192775-58.307987 16.186657-15.536858 37.81935-24.139793 60.753689-24.139793l490.019383 0c22.933315 0 44.597731 8.602935 60.752666 24.139793 16.21838 15.535835 25.099654 36.272112 25.099654 58.307987L841.822332 806.049083zM510.974136 135.440715c114.914216 0 208.318536 89.75214 208.318536 200.055338l73.350588 0c0-149.113109-126.366036-270.496667-281.669124-270.496667-155.333788 0-281.699824 121.383558-281.699824 270.496667l73.350588 0C302.623877 225.193879 396.059919 135.440715 510.974136 135.440715zM474.299865 747.244792l73.350588 0L547.650453 629.576859l-73.350588 0L474.299865 747.244792z"
                  fill="#808080"
                  p-id="1756"
                ></path>
              </svg>
            </div>
            <NormalInput placeholder={Locale.Login.code.placeholder} />
          </div>

          <div className={styles["forget-form-password"]}>
            <div className={styles["input-icon"]}>
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1755"
                width="128"
                height="128"
              >
                <path
                  d="M868.593046 403.832442c-30.081109-28.844955-70.037123-44.753273-112.624057-44.753273L265.949606 359.079168c-42.554188 0-82.510202 15.908318-112.469538 44.690852-30.236652 28.782533-46.857191 67.222007-46.857191 108.198258l0 294.079782c0 40.977273 16.619516 79.414701 46.702672 108.136859 29.959336 28.844955 70.069869 44.814672 112.624057 44.814672l490.019383 0c42.585911 0 82.696444-15.969717 112.624057-44.814672 30.082132-28.844955 46.579875-67.222007 46.579875-108.136859L915.172921 511.968278C915.171897 471.053426 898.675178 432.677397 868.593046 403.832442zM841.821309 806.049083c0 22.098297-8.882298 42.772152-25.099654 58.306964-16.154935 15.661701-37.81935 24.203238-60.752666 24.203238L265.949606 888.559285c-22.934339 0-44.567032-8.54256-60.877509-24.264637-16.186657-15.474436-25.067932-36.148291-25.067932-58.246589L180.004165 511.968278c0-22.035876 8.881274-42.772152 25.192775-58.307987 16.186657-15.536858 37.81935-24.139793 60.753689-24.139793l490.019383 0c22.933315 0 44.597731 8.602935 60.752666 24.139793 16.21838 15.535835 25.099654 36.272112 25.099654 58.307987L841.822332 806.049083zM510.974136 135.440715c114.914216 0 208.318536 89.75214 208.318536 200.055338l73.350588 0c0-149.113109-126.366036-270.496667-281.669124-270.496667-155.333788 0-281.699824 121.383558-281.699824 270.496667l73.350588 0C302.623877 225.193879 396.059919 135.440715 510.974136 135.440715zM474.299865 747.244792l73.350588 0L547.650453 629.576859l-73.350588 0L474.299865 747.244792z"
                  fill="#808080"
                  p-id="1756"
                ></path>
              </svg>
            </div>
            <PasswordInput placeholder={Locale.Login.password.placeholder} />
          </div>

          <button className={styles["forget-form-confirm"]}>
            {Locale.Login.confirm}
          </button>

          <button
            className={styles["forget-form-back"]}
            onClick={() => navigate(Path.Login)}
          >
            {Locale.Login.back}
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export function Register(props: {}) {
  const navigate = useNavigate();

  return (
    <ErrorBoundary>
      <div className={styles["register"]}>
        <div className={styles["register-form"]}>
          <p className={styles["register-form-title"]}>
            {Locale.Login.registerTitle}
          </p>

          <div className={styles["register-form-phone"]}>
            <div className={styles["input"]}>
              <div className={styles["input-icon"]}>
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1725"
                  width="20"
                  height="20"
                >
                  <path
                    d="M665.69 554.94C736 506.25 782 425.11 782 333.22 782 184.3 661.12 63.56 512 63.56S242 184.3 242 333.22c0 91.89 46 173 116.31 221.72C222.74 614.14 128 749.27 128 906.5q0 6.27 0.21 12.48c0 1.41 0.09 2.82 0.15 4.22a40.05 40.05 0 0 0 79.93-3.64v-0.44c0-0.72-0.06-1.43-0.08-2.15-0.12-3.48-0.2-7-0.2-10.47 0-167.68 136.11-303.61 304-303.61S816 738.82 816 906.5c0 3.42-0.08 6.83-0.19 10.22 0 0.93-0.07 1.85-0.11 2.78a40.05 40.05 0 0 0 79.95 3.41c0.05-1.3 0.1-2.6 0.14-3.9q0.21-6.22 0.21-12.51c0-157.23-94.74-292.36-230.31-351.56zM322 333.22c0-104.8 85.07-189.76 190-189.76s190 85 190 189.76S616.93 523 512 523s-190-85-190-189.78z"
                    fill="#999999"
                    p-id="1726"
                  ></path>
                </svg>
              </div>
              <NormalInput placeholder={Locale.Login.phone.placeholder} />
            </div>
            <button className={styles["input-code-btn"]}>
              {Locale.Login.getCode}
            </button>
          </div>

          <div className={styles["register-form-code"]}>
            <div className={styles["input-icon"]}>
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1755"
                width="128"
                height="128"
              >
                <path
                  d="M868.593046 403.832442c-30.081109-28.844955-70.037123-44.753273-112.624057-44.753273L265.949606 359.079168c-42.554188 0-82.510202 15.908318-112.469538 44.690852-30.236652 28.782533-46.857191 67.222007-46.857191 108.198258l0 294.079782c0 40.977273 16.619516 79.414701 46.702672 108.136859 29.959336 28.844955 70.069869 44.814672 112.624057 44.814672l490.019383 0c42.585911 0 82.696444-15.969717 112.624057-44.814672 30.082132-28.844955 46.579875-67.222007 46.579875-108.136859L915.172921 511.968278C915.171897 471.053426 898.675178 432.677397 868.593046 403.832442zM841.821309 806.049083c0 22.098297-8.882298 42.772152-25.099654 58.306964-16.154935 15.661701-37.81935 24.203238-60.752666 24.203238L265.949606 888.559285c-22.934339 0-44.567032-8.54256-60.877509-24.264637-16.186657-15.474436-25.067932-36.148291-25.067932-58.246589L180.004165 511.968278c0-22.035876 8.881274-42.772152 25.192775-58.307987 16.186657-15.536858 37.81935-24.139793 60.753689-24.139793l490.019383 0c22.933315 0 44.597731 8.602935 60.752666 24.139793 16.21838 15.535835 25.099654 36.272112 25.099654 58.307987L841.822332 806.049083zM510.974136 135.440715c114.914216 0 208.318536 89.75214 208.318536 200.055338l73.350588 0c0-149.113109-126.366036-270.496667-281.669124-270.496667-155.333788 0-281.699824 121.383558-281.699824 270.496667l73.350588 0C302.623877 225.193879 396.059919 135.440715 510.974136 135.440715zM474.299865 747.244792l73.350588 0L547.650453 629.576859l-73.350588 0L474.299865 747.244792z"
                  fill="#808080"
                  p-id="1756"
                ></path>
              </svg>
            </div>
            <NormalInput placeholder={Locale.Login.code.placeholder} />
          </div>

          <button className={styles["register-form-confirm"]}>
            {Locale.Login.confirm}
          </button>

          <button
            className={styles["register-form-back"]}
            onClick={() => navigate(Path.Login)}
          >
            {Locale.Login.back}
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
}
