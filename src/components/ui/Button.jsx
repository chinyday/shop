import React from 'react';

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className="bg-brand text-white py-2 px-4 rounded-sm">
      {text}
    </button>
  );
}

export default Button;
