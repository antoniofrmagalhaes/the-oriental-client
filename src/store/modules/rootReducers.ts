import { combineReducers } from 'redux';

import order from './order/reducer';

export const rootReducers = combineReducers({ order });

export type RootState = ReturnType<typeof rootReducers>;
