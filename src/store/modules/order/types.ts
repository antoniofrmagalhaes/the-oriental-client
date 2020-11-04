export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REMOVE_ALL_PRODUCTS = 'REMOVE_ALL_PRODUCTS';
export const UPDATE_PRODUCT_AMOUNT = 'UPDATE_PRODUCT_AMOUNT';
export const SEND_ORDER_REQUEST = 'SEND_ORDER_REQUEST';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED';

export interface Product {
  _id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  price: number;
  amount: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Order {
  _id?: string;
  payment: {
    method: 'card';
    type: 'credit';
    paid: true;
  };
  products: Product[];
  createdAt?: string;
  updatedAt?: string;
}

export interface AddProduct {
  type: typeof ADD_PRODUCT;
  product: Product;
}

export interface RemoveProduct {
  type: typeof REMOVE_PRODUCT;
  _id: string;
}

export interface RemoveAllProducts {
  type: typeof REMOVE_ALL_PRODUCTS;
}

export interface UpdateAmount {
  type: typeof UPDATE_PRODUCT_AMOUNT;
  _id: string;
  amount: number;
}

export interface SendOrderRequest {
  type: typeof SEND_ORDER_REQUEST;
  order: Order;
}

export interface SendOrderSuccess {
  type: typeof SEND_ORDER_SUCCESS;
}

export interface SendOrderFailed {
  type: typeof SEND_ORDER_FAILED;
}

export interface OrderState {
  payment: {
    method: 'card';
    type: 'credit';
    paid: true;
  };
  products: Product[];
}

export type OrderActionTypes =
  | AddProduct
  | RemoveProduct
  | RemoveAllProducts
  | UpdateAmount
  | SendOrderRequest
  | SendOrderSuccess
  | SendOrderFailed;
