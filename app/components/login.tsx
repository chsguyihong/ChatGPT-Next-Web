/*
 * @Date: 2023-05-25 14:26:17
 * @LastEditTime: 2023-06-15 14:08:31
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
  const accessStore = useAccessStore();

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ErrorBoundary>
      <div className={styles["login"]}>
        <div className={styles["login-form"]}>
          <p className={styles["login-form-title"]}>
            {Locale.Login.loginTitle}
          </p>

          <div className={styles["login-form-account"]}>
            <NormalInput
              value={account}
              onChange={(e) => {
                setAccount(e.currentTarget.value);
              }}
              placeholder={Locale.Login.account.placeholder}
              icon={
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1725"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M665.69 554.94C736 506.25 782 425.11 782 333.22 782 184.3 661.12 63.56 512 63.56S242 184.3 242 333.22c0 91.89 46 173 116.31 221.72C222.74 614.14 128 749.27 128 906.5q0 6.27 0.21 12.48c0 1.41 0.09 2.82 0.15 4.22a40.05 40.05 0 0 0 79.93-3.64v-0.44c0-0.72-0.06-1.43-0.08-2.15-0.12-3.48-0.2-7-0.2-10.47 0-167.68 136.11-303.61 304-303.61S816 738.82 816 906.5c0 3.42-0.08 6.83-0.19 10.22 0 0.93-0.07 1.85-0.11 2.78a40.05 40.05 0 0 0 79.95 3.41c0.05-1.3 0.1-2.6 0.14-3.9q0.21-6.22 0.21-12.51c0-157.23-94.74-292.36-230.31-351.56zM322 333.22c0-104.8 85.07-189.76 190-189.76s190 85 190 189.76S616.93 523 512 523s-190-85-190-189.78z"
                    fill="#999999"
                    p-id="1726"
                  ></path>
                </svg>
              }
            />
          </div>

          <div className={styles["login-form-password"]}>
            <PasswordInput
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
              placeholder={Locale.Login.password.placeholder}
              icon={
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1755"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M868.593046 403.832442c-30.081109-28.844955-70.037123-44.753273-112.624057-44.753273L265.949606 359.079168c-42.554188 0-82.510202 15.908318-112.469538 44.690852-30.236652 28.782533-46.857191 67.222007-46.857191 108.198258l0 294.079782c0 40.977273 16.619516 79.414701 46.702672 108.136859 29.959336 28.844955 70.069869 44.814672 112.624057 44.814672l490.019383 0c42.585911 0 82.696444-15.969717 112.624057-44.814672 30.082132-28.844955 46.579875-67.222007 46.579875-108.136859L915.172921 511.968278C915.171897 471.053426 898.675178 432.677397 868.593046 403.832442zM841.821309 806.049083c0 22.098297-8.882298 42.772152-25.099654 58.306964-16.154935 15.661701-37.81935 24.203238-60.752666 24.203238L265.949606 888.559285c-22.934339 0-44.567032-8.54256-60.877509-24.264637-16.186657-15.474436-25.067932-36.148291-25.067932-58.246589L180.004165 511.968278c0-22.035876 8.881274-42.772152 25.192775-58.307987 16.186657-15.536858 37.81935-24.139793 60.753689-24.139793l490.019383 0c22.933315 0 44.597731 8.602935 60.752666 24.139793 16.21838 15.535835 25.099654 36.272112 25.099654 58.307987L841.822332 806.049083zM510.974136 135.440715c114.914216 0 208.318536 89.75214 208.318536 200.055338l73.350588 0c0-149.113109-126.366036-270.496667-281.669124-270.496667-155.333788 0-281.699824 121.383558-281.699824 270.496667l73.350588 0C302.623877 225.193879 396.059919 135.440715 510.974136 135.440715zM474.299865 747.244792l73.350588 0L547.650453 629.576859l-73.350588 0L474.299865 747.244792z"
                    fill="#808080"
                    p-id="1756"
                  ></path>
                </svg>
              }
            />
          </div>

          <button
            className={styles["login-form-confirm"]}
            onClick={() => {
              account &&
                password &&
                accessStore.login(account, password, () => {
                  navigate(Path.Home);
                });
            }}
          >
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
              <NormalInput
                placeholder={Locale.Login.phone.placeholder}
                icon={
                  <svg
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1725"
                    width="100%"
                    height="100%"
                  >
                    <path
                      d="M665.69 554.94C736 506.25 782 425.11 782 333.22 782 184.3 661.12 63.56 512 63.56S242 184.3 242 333.22c0 91.89 46 173 116.31 221.72C222.74 614.14 128 749.27 128 906.5q0 6.27 0.21 12.48c0 1.41 0.09 2.82 0.15 4.22a40.05 40.05 0 0 0 79.93-3.64v-0.44c0-0.72-0.06-1.43-0.08-2.15-0.12-3.48-0.2-7-0.2-10.47 0-167.68 136.11-303.61 304-303.61S816 738.82 816 906.5c0 3.42-0.08 6.83-0.19 10.22 0 0.93-0.07 1.85-0.11 2.78a40.05 40.05 0 0 0 79.95 3.41c0.05-1.3 0.1-2.6 0.14-3.9q0.21-6.22 0.21-12.51c0-157.23-94.74-292.36-230.31-351.56zM322 333.22c0-104.8 85.07-189.76 190-189.76s190 85 190 189.76S616.93 523 512 523s-190-85-190-189.78z"
                      fill="#999999"
                      p-id="1726"
                    ></path>
                  </svg>
                }
              />
            </div>
            <button className={styles["input-code-btn"]}>
              {Locale.Login.getCode}
            </button>
          </div>

          <div className={styles["forget-form-code"]}>
            <NormalInput
              placeholder={Locale.Login.code.placeholder}
              icon={
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1785"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M512.672914 0C525.429029 10.386286 536.956343 21.767314 551.936 30.3104 634.645943 77.4144 796.818286 99.064686 921.6 87.771429 921.6 218.053486 919.200914 416.3584 919.200914 546.640457 919.200914 599.888457 928.036571 686.6944 911.7696 726.4256 876.192914 813.407086 780.960914 882.132114 706.911086 933.390629 665.629257 961.974857 622.474971 986.346057 572.094171 1006.562743 555.914971 1013.057829 529.700571 1027.335314 506.294857 1023.268571 395.761371 1004.105143 235.666286 886.959543 176.186514 814.226286 151.844571 784.471771 122.002286 757.1456 109.304686 715.9808 96.899657 675.810743 105.0624 586.313143 105.0624 536.195657 105.0624 409.365943 102.4 214.571886 102.4 87.771429 236.895086 100.820114 456.469943 74.371657 512.672914 0ZM160.914286 146.285714C161.265371 302.723657 160.5632 545.733486 160.914286 702.171429 182.184229 768.321829 297.311086 836.666514 352.373029 874.847086 387.306057 899.072 422.999771 920.722286 464.896 938.627657 476.832914 943.7184 499.390171 959.166171 516.9152 955.333486 605.769143 935.965257 745.325714 834.384457 795.004343 773.471086 814.167771 749.9776 854.922971 735.700114 863.085714 702.171429 863.085714 546.435657 863.085714 302.021486 863.085714 146.285714 727.157029 147.982629 599.771429 129.024 512.672914 84.670171 445.410743 134.465829 281.102629 146.197943 160.914286 146.285714ZM741.931886 307.287771C768.380343 312.173714 788.8896 336.749714 769.550629 362.7008 696.32 434.468571 623.060114 506.2656 549.829486 578.033371 535.903086 591.725714 495.616 644.885943 468.085029 638.654171 448.043886 634.119314 434.205257 612.586057 421.390629 599.976229 388.125257 567.559314 354.859886 535.171657 321.594514 502.754743 310.8864 492.222171 292.103314 471.712914 305.678629 450.501486 313.9584 437.540571 337.364114 428.938971 354.5088 440.056686 394.474057 479.407543 434.468571 518.787657 474.463086 558.167771 557.231543 476.628114 640.058514 395.088457 722.826971 313.578057 729.205029 311.471543 735.583086 309.394286 741.931886 307.287771Z"
                    p-id="1786"
                    fill="#999999"
                  ></path>
                </svg>
              }
            />
          </div>

          <div className={styles["forget-form-password"]}>
            <PasswordInput
              placeholder={Locale.Login.password.placeholder}
              icon={
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1755"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M868.593046 403.832442c-30.081109-28.844955-70.037123-44.753273-112.624057-44.753273L265.949606 359.079168c-42.554188 0-82.510202 15.908318-112.469538 44.690852-30.236652 28.782533-46.857191 67.222007-46.857191 108.198258l0 294.079782c0 40.977273 16.619516 79.414701 46.702672 108.136859 29.959336 28.844955 70.069869 44.814672 112.624057 44.814672l490.019383 0c42.585911 0 82.696444-15.969717 112.624057-44.814672 30.082132-28.844955 46.579875-67.222007 46.579875-108.136859L915.172921 511.968278C915.171897 471.053426 898.675178 432.677397 868.593046 403.832442zM841.821309 806.049083c0 22.098297-8.882298 42.772152-25.099654 58.306964-16.154935 15.661701-37.81935 24.203238-60.752666 24.203238L265.949606 888.559285c-22.934339 0-44.567032-8.54256-60.877509-24.264637-16.186657-15.474436-25.067932-36.148291-25.067932-58.246589L180.004165 511.968278c0-22.035876 8.881274-42.772152 25.192775-58.307987 16.186657-15.536858 37.81935-24.139793 60.753689-24.139793l490.019383 0c22.933315 0 44.597731 8.602935 60.752666 24.139793 16.21838 15.535835 25.099654 36.272112 25.099654 58.307987L841.822332 806.049083zM510.974136 135.440715c114.914216 0 208.318536 89.75214 208.318536 200.055338l73.350588 0c0-149.113109-126.366036-270.496667-281.669124-270.496667-155.333788 0-281.699824 121.383558-281.699824 270.496667l73.350588 0C302.623877 225.193879 396.059919 135.440715 510.974136 135.440715zM474.299865 747.244792l73.350588 0L547.650453 629.576859l-73.350588 0L474.299865 747.244792z"
                    fill="#808080"
                    p-id="1756"
                  ></path>
                </svg>
              }
            />
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
              <NormalInput
                placeholder={Locale.Login.phone.placeholder}
                icon={
                  <svg
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1725"
                    width="100%"
                    height="100%"
                  >
                    <path
                      d="M665.69 554.94C736 506.25 782 425.11 782 333.22 782 184.3 661.12 63.56 512 63.56S242 184.3 242 333.22c0 91.89 46 173 116.31 221.72C222.74 614.14 128 749.27 128 906.5q0 6.27 0.21 12.48c0 1.41 0.09 2.82 0.15 4.22a40.05 40.05 0 0 0 79.93-3.64v-0.44c0-0.72-0.06-1.43-0.08-2.15-0.12-3.48-0.2-7-0.2-10.47 0-167.68 136.11-303.61 304-303.61S816 738.82 816 906.5c0 3.42-0.08 6.83-0.19 10.22 0 0.93-0.07 1.85-0.11 2.78a40.05 40.05 0 0 0 79.95 3.41c0.05-1.3 0.1-2.6 0.14-3.9q0.21-6.22 0.21-12.51c0-157.23-94.74-292.36-230.31-351.56zM322 333.22c0-104.8 85.07-189.76 190-189.76s190 85 190 189.76S616.93 523 512 523s-190-85-190-189.78z"
                      fill="#999999"
                      p-id="1726"
                    ></path>
                  </svg>
                }
              />
            </div>
            <button className={styles["input-code-btn"]}>
              {Locale.Login.getCode}
            </button>
          </div>

          <div className={styles["register-form-code"]}>
            <NormalInput
              placeholder={Locale.Login.code.placeholder}
              icon={
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1785"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M512.672914 0C525.429029 10.386286 536.956343 21.767314 551.936 30.3104 634.645943 77.4144 796.818286 99.064686 921.6 87.771429 921.6 218.053486 919.200914 416.3584 919.200914 546.640457 919.200914 599.888457 928.036571 686.6944 911.7696 726.4256 876.192914 813.407086 780.960914 882.132114 706.911086 933.390629 665.629257 961.974857 622.474971 986.346057 572.094171 1006.562743 555.914971 1013.057829 529.700571 1027.335314 506.294857 1023.268571 395.761371 1004.105143 235.666286 886.959543 176.186514 814.226286 151.844571 784.471771 122.002286 757.1456 109.304686 715.9808 96.899657 675.810743 105.0624 586.313143 105.0624 536.195657 105.0624 409.365943 102.4 214.571886 102.4 87.771429 236.895086 100.820114 456.469943 74.371657 512.672914 0ZM160.914286 146.285714C161.265371 302.723657 160.5632 545.733486 160.914286 702.171429 182.184229 768.321829 297.311086 836.666514 352.373029 874.847086 387.306057 899.072 422.999771 920.722286 464.896 938.627657 476.832914 943.7184 499.390171 959.166171 516.9152 955.333486 605.769143 935.965257 745.325714 834.384457 795.004343 773.471086 814.167771 749.9776 854.922971 735.700114 863.085714 702.171429 863.085714 546.435657 863.085714 302.021486 863.085714 146.285714 727.157029 147.982629 599.771429 129.024 512.672914 84.670171 445.410743 134.465829 281.102629 146.197943 160.914286 146.285714ZM741.931886 307.287771C768.380343 312.173714 788.8896 336.749714 769.550629 362.7008 696.32 434.468571 623.060114 506.2656 549.829486 578.033371 535.903086 591.725714 495.616 644.885943 468.085029 638.654171 448.043886 634.119314 434.205257 612.586057 421.390629 599.976229 388.125257 567.559314 354.859886 535.171657 321.594514 502.754743 310.8864 492.222171 292.103314 471.712914 305.678629 450.501486 313.9584 437.540571 337.364114 428.938971 354.5088 440.056686 394.474057 479.407543 434.468571 518.787657 474.463086 558.167771 557.231543 476.628114 640.058514 395.088457 722.826971 313.578057 729.205029 311.471543 735.583086 309.394286 741.931886 307.287771Z"
                    p-id="1786"
                    fill="#999999"
                  ></path>
                </svg>
              }
            />
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