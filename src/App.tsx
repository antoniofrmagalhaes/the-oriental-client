import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';

import ThemeProvider from './styles/ThemeProvider';

import ProductsProvider from './contexts/ProductsContext';
import OrdersProvider from './contexts/OrdersContext';

import { persistor, store } from './store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <OrdersProvider>
            <ProductsProvider>
              <Home />
              <ToastContainer autoClose={1500} limit={2} hideProgressBar />
            </ProductsProvider>
          </OrdersProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
