import React from 'react';

const ProductCard = ({product}) => {

  console.log('product', product);

  const {title, image, price, category, id} = product;
  return (
   <li key={id} className="rounded-lg shadow-md overflow-hidden cursor-pointer">
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
