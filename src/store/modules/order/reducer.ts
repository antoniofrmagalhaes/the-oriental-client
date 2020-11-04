import produce from 'immer';
import { AnyAction, Reducer } from 'redux';

import {
  ADD_PRODUCT,
  OrderState,
  REMOVE_ALL_PRODUCTS,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT_AMOUNT,
} from './types';

const initialState: OrderState = {
  payment: {
    method: 'card',
    type: 'credit',
    paid: true,
  },
  products: [],
};

const order: Reducer<OrderState, AnyAction> = (
  state = initialState,
  action,
): OrderState => {
  switch (action.type) {
    case ADD_PRODUCT:
      return produce(state, draft => {
        const productIndex = draft.products.findIndex(
          product => product._id === action.product._id,
        );
        if (productIndex >= 0) {
          draft.products[productIndex].amount += 1;
        } else {
          draft.products.push({
            ...action.product,
            amount: 1,
          });
        }
      });

    case REMOVE_PRODUCT:
      return produce(state, draft => {
        const productIndex = draft.products.findIndex(
          product => product._id === action._id,
        );
        if (productIndex >= 0) {
          draft.products.splice(productIndex, 1);
        }
      });

    case REMOVE_ALL_PRODUCTS:
      return produce(state, draft => {
        draft.products = [];
      });

    case UPDATE_PRODUCT_AMOUNT:
      return produce(state, draft => {
        const productIndex = draft.products.findIndex(
          product => product._id === action._id,
        );
        if (productIndex >= 0) {
          draft.products[productIndex].amount = Number(action.amount);
        }
      });

    default:
      return state;
  }
};

export default order;
