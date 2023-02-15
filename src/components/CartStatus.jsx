import React from 'react';
import { BiCartAlt } from 'react-icons/bi'
import useCart from '../hooks/useCart';


const CartStatus = () => {
  const {cartQuery:{ data: products}} = useCart();

  return (
    <div className='relative'>
      <BiCartAlt className='text-4xl' />
      {products && <p className='absolute w-5 h-5 text-center bg-brand text-white rounded-full -top-1 -right-1 text-xs justify-center flex items-center'>{products.length}</p>}
    </div>
  );
}

export default CartStatus;
