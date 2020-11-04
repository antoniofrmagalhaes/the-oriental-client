import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { sendOrderFailed, sendOrderSuccess } from './actions';

import { ADD_PRODUCT, SEND_ORDER_REQUEST } from './types';

export function addProduct({ product }: AnyAction): void {
  toast.warn(`${product.name} adicionado ao carrinho.`, {});
}

export function* sendOrder({ order }: AnyAction): {} {
  try {
    const response = yield call(api.post, 'orders', order);
    yield put(sendOrderSuccess());
    toast.success(`Order nº ${response.data._id} created`);
  } catch (error) {
    yield put(sendOrderFailed());
    toast.error(`An error occurred, please verify your network connection.`);
  }
}

export default all([
  takeLatest(SEND_ORDER_REQUEST, sendOrder),
  takeLatest(ADD_PRODUCT, addProduct),
]);
