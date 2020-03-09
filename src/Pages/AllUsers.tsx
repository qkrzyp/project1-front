import React, { useEffect, useState } from "react";
import LayoutC from "../Components/LayoutC";
import { getAllUsers } from "../api";
import useAuth from "../Hooks/useAuth";
const classes = require("../Style.module.css");

interface User {
  admin: boolean;
  name: string;
  phone: number;
  email: string;
  createdAt: string;
}

const AllUsers = () => {
  const { authToken } = useAuth();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers(authToken).then(result => {
      if (result) {
        setUsers(result);
      }
    });
  }, [authToken]);

  return (
    <LayoutC>
      <div className={classes.AllTable}>
        <h3>전체 회원 관리</h3>
        <table>
          <thead>
            <tr>
              <th>회원정보</th>
              <th>이름</th>
              <th>이메일</th>
              <th>휴대전화</th>
              <th>가입일</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i}>
                <td>{u.admin ? "운영자" : "일반회원"}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>{u.createdAt.split("T")[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LayoutC>
  );
};

export default AllUsers;
