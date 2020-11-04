import {
  Product,
  OrderActionTypes,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT_AMOUNT,
  Order,
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_FAILED,
  REMOVE_ALL_PRODUCTS,
} from './types';

export function addProduct(product: Product): OrderActionTypes {
  return {
    type: ADD_PRODUCT,
    product,
  };
}

export function removeProduct(_id: string): OrderActionTypes {
  return {
    type: REMOVE_PRODUCT,
    _id,
  };
}

export function removeAllProducts(): OrderActionTypes {
  return {
    type: REMOVE_ALL_PRODUCTS,
  };
}

export function updateProductAmount(
  _id: string,
  amount: number,
): OrderActionTypes {
  return {
    type: UPDATE_PRODUCT_AMOUNT,
    _id,
    amount,
  };
}

export function sendOrderRequest(order: Order): OrderActionTypes {
  return {
    type: SEND_ORDER_REQUEST,
    order,
  };
}

export function sendOrderSuccess(): OrderActionTypes {
  return {
    type: SEND_ORDER_SUCCESS,
  };
}

export function sendOrderFailed(): OrderActionTypes {
  return {
    type: SEND_ORDER_FAILED,
  };
}
