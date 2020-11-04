import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  removeProduct,
  removeAllProducts,
  sendOrderRequest,
  updateProductAmount,
} from '../store/modules/order/actions';
import { Order, OrderState, Product } from '../store/modules/order/types';
import { RootState } from '../store/modules/rootReducers';
import { formatPrice } from '../utils/formatPrice';

interface ProductsAmount {
  [key: string]: number;
}

interface IOrdersContextProps {
  handleAddProduct: (product: Product) => void;
  handleRemoveProduct: (_id: string) => void;
  handleRemoveAllProducts: () => void;
  handleIncrementProduct: (product: Product) => void;
  handleDecrementProduct: (product: Product) => void;
  handleSendOrderRequest: () => void;
  order: Order;
  productsAmount: ProductsAmount;
  subtotal: string;
  tax: string;
  deliveryFee: string;
  total: string;
}

export const OrdersContext = React.createContext<IOrdersContextProps>(
  {} as IOrdersContextProps,
);

const OrdersProvider: React.FC = ({ children }) => {
  const orders = useProvideOrders();
  return (
    <OrdersContext.Provider value={orders}>{children}</OrdersContext.Provider>
  );
};

export const useOrders = (): IOrdersContextProps => {
  return React.useContext(OrdersContext);
};

export function useProvideOrders(): IOrdersContextProps {
  const dispatch = useDispatch();
  const order = useSelector<RootState, OrderState>(state => state.order);
  const [taxValue] = React.useState(0);
  const [deliveryFeeValue] = React.useState(5);

  const handleAddProduct = async (product: Product): Promise<void> => {
    dispatch(addProduct(product));
  };

  const handleRemoveProduct = async (_id: string): Promise<void> => {
    dispatch(removeProduct(_id));
  };

  const handleRemoveAllProducts = async (): Promise<void> => {
    dispatch(removeAllProducts());
  };

  const handleIncrementProduct = async (product: Product): Promise<void> => {
    dispatch(updateProductAmount(product._id, product.amount + 1));
  };

  const handleDecrementProduct = async (product: Product): Promise<void> => {
    dispatch(updateProductAmount(product._id, product.amount - 1));
  };

  const handleSendOrderRequest = async (): Promise<void> => {
    dispatch(sendOrderRequest(order));
  };

  const getProductsAmount = () => {
    return order.products.reduce<ProductsAmount>((amount, product) => {
      amount[product._id] = product.amount;
      return amount;
    }, {});
  };

  return {
    handleAddProduct,
    handleRemoveProduct,
    handleRemoveAllProducts,
    handleIncrementProduct,
    handleDecrementProduct,
    handleSendOrderRequest,
    order: useSelector<RootState, OrderState>(state => state.order),
    productsAmount: getProductsAmount(),
    subtotal: formatPrice(
      order.products.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0),
    ),
    tax: formatPrice(taxValue),
    deliveryFee: formatPrice(deliveryFeeValue),
    total: formatPrice(
      order.products.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0) +
        taxValue +
        deliveryFeeValue,
    ),
  };
}

export default OrdersProvider;
