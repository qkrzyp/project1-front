import {
  authStart,
  authLoginSuccess,
  authLoginFail,
  authSignupSuccess,
  authSignupFail,
  authLogout,
  authRedirect,
  authEditSuccess,
  authEditFail,
  authEditRedirect
} from "../actions/auth";
import { cartAdd, cartOrder, cartRedirect } from "../actions/cart";
import {
  searchStart,
  searchFail,
  searchRedirect,
  searchSuccess
} from "../actions/search";

export type AuthAction =
  | ReturnType<typeof authStart>
  | ReturnType<typeof authLoginSuccess>
  | ReturnType<typeof authLoginFail>
  | ReturnType<typeof authSignupSuccess>
  | ReturnType<typeof authSignupFail>
  | ReturnType<typeof authLogout>
  | ReturnType<typeof authRedirect>
  | ReturnType<typeof authEditSuccess>
  | ReturnType<typeof authEditFail>
  | ReturnType<typeof authEditRedirect>;

export interface User {
  _id: string;
  name: string;
  email: string;
  admin: boolean;
  phone: string;
}

export interface AuthState {
  token: string | null;
  user: User;
  error: string | null;
  loading: boolean;
  param: string[];
  success: boolean;
  redirect: string;
  edit: boolean;
}

export type CartAction =
  | ReturnType<typeof cartAdd>
  | ReturnType<typeof cartOrder>
  | ReturnType<typeof cartRedirect>;

export interface CartItems {
  quantity: number;
  sell: number;
  delivery: string;
  _id: string;
  name: string;
  description: string;
  price: number;
  category:
    | {
        _id: string;
        name: string;
      }
    | string;
}

export interface CartState {
  cartItems: CartItems[];
  success: boolean;
  order: boolean;
}

export type SearchAction =
  | ReturnType<typeof searchStart>
  | ReturnType<typeof searchFail>
  | ReturnType<typeof searchRedirect>
  | ReturnType<typeof searchSuccess>;

export interface SearchState {
  searchResults: CartItems[];
  loading: boolean;
  success: boolean;
}
