'use client';

import { useEffect, useState } from "react";

export default function Home() {
  const [product, setProduct] = useState<string>('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products', {
          method: 'GET',
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProduct(data.message);
      } catch (error: any) {
        setProduct(error?.message);
      }
    };

    fetchProducts();
  }, []);
  return (
    <main>
      {product ? product : 'Loading message...'}
    </main>
  );
}
