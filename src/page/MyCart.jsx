import React from "react";
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { FaEquals } from 'react-icons/fa'
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";

const SHOPFEE = 3000;

export default function MyCart() {
  const {cartQuery :{ data: products, isLoading}} = useCart();

  if(isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totlaPrice = products && products.reduce((prev,  curr) => prev + parseInt(curr.price) * curr.quantity, 0);

  return (
    <section className="sm:p-4 md:p-8 lg:p-8 xl:p-8 flex flex-col">
      <h4 className="text-2xl text-center font-bold pb-4 border-b border-gray-300">내 장바구니</h4>
      {!hasProducts ? <p>장바구니가 비어있어요!</p> : 
        <>
          <ul className="border-b border-gray-300 px-8 mb-8 p-4">
            {products && products.map((product) => 
              <CartItem key={product.id} product={product} /> 
            )}
          </ul>
        </>
      }
      <div className="flex justify-between items-center px-1 sm:px-0 md:px-4 lg:px-16 mb-4">
        <PriceCard text="상품 총액" price={totlaPrice}/>
        <BsFillPlusCircleFill className="shrink-0" />
        <PriceCard text="배송비" price={SHOPFEE}/>
        <FaEquals className="shrink-0" />
        <PriceCard text="총가격" price={totlaPrice+SHOPFEE}/>
      </div>
      <Button text='주문하기' />
    </section>
  )
}