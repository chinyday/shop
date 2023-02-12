import React from 'react';

const Banner = () => {
  return (
   <section className='h-96 bg-yellow-900 relative'>
    <div  className='w-full h-full bg-banner bg-cover opacity-70'></div>
    <div className='av absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl'>
      <h2 className='text-6xl'>shoppy with us</h2>
      <p className='text-2xl'>Best products~</p>
    </div>
   </section>
  );
}

export default Banner;
