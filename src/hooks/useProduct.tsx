import { useEffect, useState } from "react";

import { Product } from "../types/product";

export default function useProduct(productId: string) {
  // State
  const [pending, setPending] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string>('');

  // Effects
  useEffect(() => {
    (async () => {
      try {
        setPending(true);
        const resp = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await resp.json();
        setProduct(data);
      } catch (error: any) {
        setError(error.message)
      } finally {
        setPending(false);
      }
    })();
  }, [productId, setProduct, setPending, setError]);

  return {
    pending,
    product,
    error,
  };
}