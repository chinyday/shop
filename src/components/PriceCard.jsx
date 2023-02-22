import React from 'react';

const PriceCard = ({text, price}) => {
  return (
    <div className='bg-gray-50 p-8 mx-2 text-center rounded-2xl text-lg md:text-xl'>
      <p className=''>{text}</p>
      <p className='font-bold text-brand text-xl md:text-2xl'>{price}원</p>
    </div>
  );
}

export default PriceCard;
