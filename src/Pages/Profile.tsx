import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import LayoutB from "../Components/LayoutB";
import useAuth from "../Hooks/useAuth";
const classes = require("../Style.module.css");

interface ProfileProps extends RouteComponentProps<any> {}

const Profile = ({ history }: ProfileProps) => {
  const {
    authName,
    authEmail,
    authAdmin,
    authPhone,
    onAuthEditRedirect
  } = useAuth();

  useEffect(() => {
    onAuthEditRedirect();
  }, [onAuthEditRedirect]);

  const myOrderHandler = () => {
    history.push("/profile/purchase");
  };

  const myProfileHandler = () => {
    history.push("/profile/edit");
  };

  return (
    <LayoutB title={`${authName}님의 내정보 관리`}>
      <div className={classes.Profile}>
        <h3>내 정보</h3>
        <table>
          <tbody>
            <tr>
              <th>이름</th>
              <td>{authName}</td>
            </tr>
            <tr>
              <th>이메일</th>
              <td>{authEmail}</td>
            </tr>
            <tr>
              <th>휴대전화</th>
              <td>{authPhone}</td>
            </tr>
            <tr>
              <th>회원정보</th>
              <td>{authAdmin ? "운영자" : "일반회원"}</td>
            </tr>
          </tbody>
        </table>
        <div className={classes.ProfileBtn}>
          <button onClick={myOrderHandler}>내 주문내역</button>
          <button onClick={myProfileHandler}>내정보 수정</button>
        </div>
      </div>
    </LayoutB>
  );
};

export default Profile;
