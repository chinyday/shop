import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import { addOrUpdateToCart } from "../api/firebase";
import Button from '../components/ui/Button'
import { useAuthContext } from "../context/AuthContext";

export default function ProductDetail() {
  
  const {state : {product : {id, image, title, price, description, category, options}}} = useLocation();
  const [selectedOption, setSelectedOption] = useState(options && options[0]);
  const { uid } = useAuthContext();
  const handleChange = (e) => setSelectedOption(e.target.value);
  const handleclick = (e) => {
    const product = {id, image, title, price, description, category, selectedOption, quantity:1};
    addOrUpdateToCart(product, uid);
  }

  return (
   <section>
    <p className="mx-12 mt-4 text-gray-700">{category}</p>
    <div className="flex flex-col md:flex-row p-4">
      <img className="w-full px-4 basis-7/12" src={image} alt={title}/>
      <div className="w-full basis-5/12 flex-col p-4">
        <h2 className="text-3xl font-bold py-2">{title}</h2>
        <p className="text-2xl font-bold py-2 border-b border-gray-400">{`${price}원`}</p>
        <p className="py-2 text-lg">{description}</p>
        <div className="flex items-center w-full">
          <label htmlFor="option" className="text-brand font-bold">옵션 : </label>
          <select id="option" className="p-2 m-4 border-2 border-dashed border-brand outline-none" onChange={handleChange} value={selectedOption}>
            {options.map((option, index) => <option key={index}>{option}</option>)}
          </select>
        </div>
        <Button text='장바구니에 추가' onClick={handleclick} />
      </div>

    </div>
   </section>
  )
}