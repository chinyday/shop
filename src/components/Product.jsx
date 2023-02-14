import React from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from './ProductCard';

const Product = () => {
  const {productsQuery:{isLoading, error, data: products}, } = useProducts();
  //productsQuery 퀴리를 가지고 있는 객체

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
