import { all } from 'redux-saga/effects';

import order from './order/sagas';

export default function* rootSaga(): Generator {
  return yield all([order]);
}
