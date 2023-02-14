import React from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle, AiFillDelete } from 'react-icons/ai'
import { addOrUpdateToCart, removeOrUpdateToCart } from '../api/firebase';

const CartItem = ({product, uid}) => {
  console.log('product', product);
  const {id, image, price, quantity, title, selectedOption,} = product;
  
  const handleMinus = () => {
    if(quantity < 2) return;
    addOrUpdateToCart(uid, {...product, quantity: quantity-1});
  }
  const handlePlus = () => {
    addOrUpdateToCart(uid, {...product, quantity: quantity+1});
  }
  const handleDelete = () => {
    removeOrUpdateToCart(uid, id)
  }
  
  return (
    <li className='flex justify-between items-center my-2'>
      <img className='w-24 md:w-48 rounded-lg' src={image} alt={title} />
      <div className='flex flex-1 justify-between ml-4'>
        <div className='basis-3/5'> 
          <p className='text-lg'>{title}</p>
          <p className='text-sm font-bold text-brand'>{selectedOption}</p>
          <p className=''>{price}원</p>
        </div>
        <div className='flex justify-between items-center'>
          <AiOutlineMinusCircle className='mx-2' onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusCircle className='mx-2' onClick={handlePlus} />
          <AiFillDelete className='mx-2' onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
