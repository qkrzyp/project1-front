import React, { useEffect, useState } from "react";
import LayoutC from "../Components/LayoutC";
import { getAllCategories, deleteCategory } from "../api";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const classes = require("../Style.module.css");

interface Category {
  _id: string;
  name: string;
}

const AllCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const { authToken } = useAuth();

  useEffect(() => {
    setLoading(true);
    getAllCategories().then(result => {
      setLoading(false);
      if (result) {
        setCategories(result);
      }
    });
  }, []);

  const deleteCategoryHandler = (id: string) => {
    let allCategories = [...categories];
    deleteCategory(authToken, id).then(result => {
      if (result._id) {
        allCategories = allCategories.filter(c => c._id !== result._id);
        setCategories(allCategories);
      }
    });
  };

  return (
    <LayoutC>
      <div className={classes.AllTable}>
        <h3>전체 카테고리 관리</h3>
        {loading ? (
          <Loader className="" />
        ) : (
          <table>
            <thead>
              <tr>
                <th>카테고리명</th>
                <th>수정 / 삭제</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c, i) => (
                <tr key={i}>
                  <td>{c.name}</td>
                  <td>
                    <Link to={`/admin/edit-category/${c._id}`}>
                      <button className={classes.EditBtn}>수정</button>
                    </Link>
                    <button
                      className={classes.EditBtn}
                      onClick={() => deleteCategoryHandler(c._id)}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </LayoutC>
  );
};

export default AllCategories;
