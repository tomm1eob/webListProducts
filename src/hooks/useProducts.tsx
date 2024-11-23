import { useEffect, useState } from "react";

import { Product } from "../types/product";

export default function useProducts() {
  // State
  const [pending, setPending] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>('');

  // Effects
  useEffect(() => {
    (async () => {
      try {
        setPending(true);
        const resp = await fetch('https://fakestoreapi.com/products');
        const data = await resp.json();
        setProducts(data);
      } catch (error: any) {
        setError(error.message)
      } finally {
        setPending(false);
      }
    })();
  }, [setProducts, setPending, setError]);

  return {
    pending,
    products,
    error,
  };
}