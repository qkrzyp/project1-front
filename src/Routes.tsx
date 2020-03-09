import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Signup from "./Pages/Signup";
import SignupSuccess from "./Pages/SignupSuccess";
import AllUsers from "./Pages/AllUsers";
import AllProducts from "./Pages/AllProducts";
import AllOrders from "./Pages/AllOrders";
import AllCategories from "./Pages/AllCategories";
import Cart from "./Pages/Cart";
import Order from "./Pages/Order";
import OrderSuccess from "./Pages/OrderSuccess";
import Logout from "./Pages/Logout";
import Products from "./Pages/Products";
import Admin from "./Pages/Admin";
import AdminRoute from "./Components/AdminRoute";
import AuthRoute from "./Components/AuthRoute";
import SearchedResult from "./Pages/SearchedResult";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";
import Purchase from "./Pages/Purchase";
import CreateProduct from "./Pages/CreateProduct";
import CreateCategory from "./Pages/CreateCategory";
import Detail from "./Pages/Detail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/signup-success" exact component={SignupSuccess} />
      <AdminRoute path="/admin" exact component={Admin} />
      <AdminRoute path="/admin/users" exact component={AllUsers} />
      <AdminRoute path="/admin/products" exact component={AllProducts} />
      <AdminRoute path="/admin/categories" exact component={AllCategories} />
      <AdminRoute path="/admin/orders" exact component={AllOrders} />
      <AdminRoute
        path="/admin/create-product"
        exact
        component={CreateProduct}
      />
      <AdminRoute
        path="/admin/create-category"
        exact
        component={CreateCategory}
      />
      <AdminRoute
        path="/admin/edit-product/:productId"
        exact
        component={CreateProduct}
      />
      <AdminRoute
        path="/admin/edit-category/:categoryId"
        exact
        component={CreateCategory}
      />
      <Route path="/cart" exact component={Cart} />
      <Route path="/search" exact component={SearchedResult} />
      <Route path="/products" exact component={Products} />
      <Route path="/product/:productId" exact component={Detail} />
      <AuthRoute path="/profile" exact component={Profile} />
      <AuthRoute path="/profile/purchase" exact component={Purchase} />
      <AuthRoute path="/profile/edit" exact component={EditProfile} />
      <AuthRoute path="/order" exact component={Order} />
      <Route path="/order-success" exact component={OrderSuccess} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
