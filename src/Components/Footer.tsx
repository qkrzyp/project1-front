import React from "react";
const classes = require("../Style.module.css");

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <nav className={classes.FooterNav}>
        <ul>
          <li>
            <h3>CUSTOMER SUPPORT</h3>
            <p>도움말</p>
            <p>주문 횟수</p>
            <p>반품</p>
            <p>매장</p>
            <p>할인권</p>
          </li>
          <li>
            <h3>ABOUT US</h3>
            <p>앱</p>
            <p>회사</p>
            <p>프렌차이즈</p>
            <p>매장 정보</p>
            <p>보도 자료</p>
          </li>
          <li className={classes.FooterSubscribe}>
            <div className={classes.SnsIcon}>
              <p>지금 바로 The Plant Shop에 구독하세요.</p>
              <div>
                <input type="text" placeholder="이메일을 입력하세요." />
                <button>구독</button>
              </div>
              <span className={classes.Sns}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 20.07 40"
                >
                  <title>facebookIcon</title>
                  <path
                    d="M-61.66,503v-3.45c0-1.8.13-2.76,2.7-2.76h4.76v-6.9H-61c-6.63,0-8.15,3.42-8.15,9V503h-5v6.89h5v20h7.5v-20h6.81l0.73-6.89h-7.55Z"
                    transform="translate(74.18 -489.86)"
                    style={{ fill: "#f7f1e3" }}
                  />
                </svg>
              </span>
              <span className={classes.Sns}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 31.12 40"
                >
                  <title>pinterestIcon</title>
                  <path
                    d="M30.22,501.68c-1.09-7.9-9-11.93-17.37-11-6.64.74-13.27,6.12-13.55,13.8-0.17,4.69,1.16,8.21,5.62,9.2,1.93-3.42-.62-4.17-1-6.64-1.64-10.12,11.68-17,18.65-10,4.83,4.9,1.65,20-6.13,18.4C9,514,20.07,502,14.12,499.64c-4.84-1.91-7.4,5.85-5.11,9.71C7.67,516,4.77,522.23,5.95,530.56c3.8-2.76,5.08-8,6.13-13.54,1.91,1.16,2.93,2.37,5.37,2.55C26.43,520.26,31.45,510.6,30.22,501.68Z"
                    transform="translate(0.72 -490.56)"
                    style={{ fill: "#f7f1e3" }}
                  />
                </svg>
              </span>
              <span className={classes.Sns}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 40 40"
                >
                  <title>instagramIcon</title>
                  <path
                    d="M98.36,534H78.79a10.23,10.23,0,0,1-10.21-10.22V504.18A10.22,10.22,0,0,1,78.79,494H98.36a10.22,10.22,0,0,1,10.21,10.21v19.57A10.23,10.23,0,0,1,98.36,534ZM78.79,496.25a7.94,7.94,0,0,0-7.93,7.93v19.57a7.94,7.94,0,0,0,7.93,7.93H98.36a7.94,7.94,0,0,0,7.93-7.93V504.18a7.93,7.93,0,0,0-7.93-7.93H78.79Z"
                    transform="translate(-68.58 -493.96)"
                    style={{ fill: "#f7f1e3" }}
                  />
                  <path
                    d="M88.58,522.88A8.91,8.91,0,1,1,97.49,514,8.92,8.92,0,0,1,88.58,522.88Zm0-15.54A6.63,6.63,0,1,0,95.2,514,6.64,6.64,0,0,0,88.58,507.33Z"
                    transform="translate(-68.58 -493.96)"
                    style={{ fill: "#f7f1e3" }}
                  />
                  <path
                    d="M93.35,507.83"
                    transform="translate(-68.58 -493.96)"
                    style={{
                      fill: "#f7f1e3",
                      stroke: "#f7f1e3",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "1.7747999429702759px"
                    }}
                  />
                  <path
                    d="M99,505.46a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,99,505.46Zm0-4.36a1.86,1.86,0,1,0,1.86,1.86A1.86,1.86,0,0,0,99,501.1Z"
                    transform="translate(-68.58 -493.96)"
                    style={{ fill: "#f7f1e3" }}
                  />
                  <path
                    d="M99,506a3,3,0,1,1,3-3A3,3,0,0,1,99,506Zm0-4.36a1.36,1.36,0,1,0,1.36,1.36A1.36,1.36,0,0,0,99,501.6Z"
                    transform="translate(-68.58 -493.96)"
                    style={{ fill: "#f7f1e3" }}
                  />
                </svg>
              </span>
            </div>
          </li>
        </ul>
      </nav>
      <div className={classes.FooterUnder}>
        <p>
          © 2020 All rights reserved &nbsp;&nbsp;&nbsp;&nbsp;
          <span>개인정보처리방침 &nbsp;&nbsp;|&nbsp;&nbsp; 판매 약관</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
