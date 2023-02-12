import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../api/firebase';
import ProductCard from './ProductCard';

const Product = () => {
  const {isLoading, error, data: products} = useQuery(['products'], getProducts);
  
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 gap-4 p-4'>
        {products && products.map(product => <ProductCard key={product.id} product={product}/>)}
      </ul>
    </div>
  );
}

export default Product;
