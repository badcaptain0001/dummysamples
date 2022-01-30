import React,{useState} from "react";
import {
  MenuIcon,
  ShoppingCartIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/solid";

function Sneakers() {

  const [plusCount,setPlusCount]=useState(0);

  return (
    <div>
      <div className="flex justify-between mx-6 py-5 bg-white">
        <div className="flex items-center">
          <MenuIcon className="w-8 mr-3" />
          <img src="/images/snekarlogo.svg" alt="" />
        </div>
        <div className="flex items-center">
          <ShoppingCartIcon className="w-8 mr-3" />
          <img className="w-10" src="images/image-avatar.png" alt="" />
        </div>
      </div>
      <div>
        <div>
          <img
            src="/images/image-product-1.jpg"
            className="w-full max-h-96 object-cover"
            alt=""
          />
          <ArrowLeftIcon className="w-14 absolute left-0 top-[35%] bg-white p-3 rounded-full ml-3" />
          <ArrowRightIcon className="w-14 absolute right-0 top-[35%] bg-white p-3 rounded-full mr-3" />
        </div>
      </div>
      <div className="mx-6 my-5">
        <p className="text-sm uppercase text-orange-400 font-kumbh font-bold">
          sneaker company
        </p>
        <h1 className="text-4xl font-kumbh font-bold capitalize mt-3 text">
          fall limited edition sneakers
        </h1>
        <p className="text-sm font-kumbh mt-3 leading-6">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </div>
      <div>
        <div className="flex justify-between mx-6 items-baseline font-kumbh">
          <div className="flex items-center">
            <h1 className="text-3xl mr-4 font-bold">$125</h1>
            <p className="py-1 px-4 bg-peach-cream-600 rounded-lg text-orange-500 text-sm font-bold">
              50%
            </p>
          </div>
          <div className="text-lg font-bold line-through text-gray-500">
            $250
          </div>
        </div>
      </div>
      <div>
        <div className="flex mx-6 justify-center mt-5">
          <MinusIcon className="w-14 bg-gray-200 rounded-l-lg text-orange-500 p-3 " onClick={()=>setPlusCount(plusCount-1)}/>
          <input
            className="w-[200px]  text-lg text-center bg-gray-200 text-gray-700"
            type="text"
            value={plusCount}
          />
          <PlusIcon className="w-14 p-3 bg-gray-200 text-orange-500 rounded-r-lg" onClick={()=>setPlusCount(plusCount+1)}/>
        </div>
      </div>
      <div className="mx-6 text-center flex justify-center pb-40">
        <button className="w-[310px] bg-orange-400 mt-5 py-4 rounded-lg font-kumbh font-bold text-white flex justify-center items-center shadow-orange-500/50 shadow-lg">
        <ShoppingCartIcon className="w-6"/>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Sneakers;
