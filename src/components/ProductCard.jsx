import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
  const {title, image, price, category, id} = product;
  const navigate = useNavigate();

  return (
   <li key={id} className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105" onClick={()=>{navigate(`/products/${id}`, {state:{product}})}}>
    <img className='w-full' src={image} alt={title}/>
    <div className='mt-2 px-2 text-lg flex justify-between items-center'>
      <h3 className='truncate'>{title}</h3>
      <p>{`${price}원`}</p>
    </div>
    <p className='mt-2 px-2 text-gray-600'>{category}</p>
   </li>
  );
}

export default ProductCard;
