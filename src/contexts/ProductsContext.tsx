import React from 'react';

import { Product } from '../store/modules/order/types';

import data from '../products';

interface GroupedBy {
  category: string;
  products: Product[];
}

interface List {
  [key: string]: Product[];
}

interface ProductsContextProps {
  products: Product[];
  groupedByCategory: GroupedBy[];
  handleIncreaseProductAmount: (product: Product) => void;
  handleDecreaseProductAmount: (product: Product) => void;
}

export const ProductsContext = React.createContext<ProductsContextProps>(
  {} as ProductsContextProps,
);

const ProductsProvider: React.FC = ({ children }) => {
  const products = useProvideProducts();
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): ProductsContextProps => {
  return React.useContext(ProductsContext);
};

export function useProvideProducts(): ProductsContextProps {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    setProducts(data.map(p => ({ ...p, amount: 0 })));
  }, []);

  const handleIncreaseProductAmount = (product: Product) => {
    const findIndex = products.findIndex(p => p._id === product._id);
    setProducts(prevProducts => {
      prevProducts[findIndex].amount = prevProducts[findIndex].amount + 1;
      return prevProducts;
    });
  };

  const handleDecreaseProductAmount = (product: Product) => {
    const findIndex = products.findIndex(p => p._id === product._id);
    setProducts(prevProducts => {
      prevProducts[findIndex].amount = -1;
      return prevProducts;
    });
  };

  return {
    products,
    groupedByCategory: Object.entries(
      data.reduce<List>((list, product) => {
        list[product.category] = list[product.category] || [];
        list[product.category].push(product);
        return list;
      }, {}),
    ).map(e => ({ category: e[0], products: e[1] })),
    handleIncreaseProductAmount,
    handleDecreaseProductAmount,
  };
}

export default ProductsProvider;
