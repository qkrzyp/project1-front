import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import LayoutB from "../Components/LayoutB";
import {
  errorMessage,
  infoChangeClass,
  infoTextareaChangeClass
} from "../Components/Error";
import {
  getAllCategories,
  createProduct,
  editProduct,
  getProduct
} from "../api";
import { Redirect } from "react-router-dom";
import Loader from "../Components/Loader";
import useAuth from "../Hooks/useAuth";
const classes = require("../Style.module.css");

interface CreateProductProps extends RouteComponentProps<any> {}

interface CreateProductValues {
  name: string;
  description: string;
  price: number | null;
  delivery: string;
  quantity: number | null;
  category: string;
  categories: { _id: string; name: string }[];
  formData: FormData;
  error: string | null;
  param: string[];
  loading: boolean;
  success: boolean;
  photo: string;
}

const CreateProduct = ({ match }: CreateProductProps) => {
  const [values, setValues] = useState<CreateProductValues>({
    name: "",
    description: "",
    price: null,
    delivery: "",
    category: "",
    quantity: null,
    categories: [],
    formData: new FormData(),
    error: null,
    param: [],
    loading: false,
    success: false,
    photo: ""
  });
  const { authToken } = useAuth();
  const productId = match.params.productId;

  const inputChangeHandler = (event: any, key: string) => {
    let value;
    if (key === "photo") {
      value = event.target.files[0];
    } else {
      value = event.target.value;
    }
    values.formData.set(key, value);
    setValues({ ...values, [key]: value });
  };

  useEffect(() => {
    if (productId) {
      setValues({ ...values, error: null, loading: true });
      getAllCategories().then(result => {
        let categories = result;
        getProduct(productId).then(result => {
          if (result.error) {
            setValues({ ...values, error: result.error, loading: false });
          } else {
            setValues({
              ...values,
              name: result.name,
              price: result.price,
              quantity: result.quantity,
              description: result.description,
              categories,
              loading: false
            });
            values.formData.set("name", result.name);
            values.formData.set("price", result.price);
            values.formData.set("quantity", result.quantity);
            values.formData.set("description", result.description);
          }
        });
      });
    } else {
      getAllCategories().then(result => {
        setValues({ ...values, categories: result });
      });
    }
  }, []);

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (productId) {
      setValues({ ...values, error: null, loading: true, success: false });
      editProduct(authToken, values.formData, productId).then(result => {
        if (result.error) {
          const param = result.error.map((e: { param: string }) => e.param);
          setValues({
            ...values,
            error: result.error[0].msg,
            param,
            loading: false
          });
        } else {
          setValues({
            ...values,
            name: "",
            description: "",
            price: null,
            quantity: null,
            photo: "",
            error: null,
            loading: false,
            success: true
          });
        }
      });
    } else {
      setValues({ ...values, error: null, loading: true, success: false });
      createProduct(authToken, values.formData).then(result => {
        if (result.error) {
          const param = result.error.map((e: { param: string }) => e.param);
          setValues({
            ...values,
            error: result.error[0].msg,
            param,
            loading: false
          });
        } else {
          setValues({
            ...values,
            name: "",
            description: "",
            price: null,
            quantity: null,
            photo: "",
            error: null,
            loading: false,
            success: true
          });
        }
      });
    }
  };

  return (
    <LayoutB title="상품 생성하기">
      {values.success && <Redirect to="/admin/products" />}

      <div className={classes.CreateProduct}>
        <h3>상품 상세정보</h3>
        {errorMessage(values.error)}
        {values.loading ? (
          <Loader className="" />
        ) : (
          <form className={classes.InfoForm} onSubmit={formSubmit}>
            <div className={classes.File}>
              <label htmlFor="file-image">파일선택</label>
              <input
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                id="file-image"
                onChange={event => inputChangeHandler(event, "photo")}
              />
            </div>
            <div>
              <label>상품명</label>
              <input
                type="text"
                className={infoChangeClass("name", values.param)}
                onChange={event => inputChangeHandler(event, "name")}
                value={values.name}
              />
            </div>
            <div>
              <label>상품설명</label>
              <textarea
                className={infoTextareaChangeClass("description", values.param)}
                onChange={event => inputChangeHandler(event, "description")}
                value={values.description}
              />
            </div>
            <div>
              <label>가격</label>
              <input
                type="number"
                className={infoChangeClass("price", values.param)}
                onChange={event => inputChangeHandler(event, "price")}
                value={values.price || undefined}
              />
            </div>
            <div>
              <label>상품개수</label>
              <input
                type="number"
                className={infoChangeClass("quantity", values.param)}
                onChange={event => inputChangeHandler(event, "quantity")}
                value={values.quantity || undefined}
              />
            </div>
            <div>
              <label>카테고리</label>
              <select
                className={infoChangeClass("category", values.param)}
                onChange={event => inputChangeHandler(event, "category")}
              >
                <option value="">카테고리를 선택해주세요.</option>
                {values.categories.map((c, i) => (
                  <option value={`${c._id}`} key={i}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>배송비</label>
              <select
                className={infoChangeClass("delivery", values.param)}
                onChange={event => inputChangeHandler(event, "delivery")}
              >
                <option value="">배송비를 선택해주세요.</option>
                <option value="무료">무료</option>
                <option value="유료">유료</option>
              </select>
            </div>
            <button className={classes.InfoFormBtn}>생성하기</button>
          </form>
        )}
      </div>
    </LayoutB>
  );
};

export default CreateProduct;
