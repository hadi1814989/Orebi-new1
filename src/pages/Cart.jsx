import { RxCross2 } from "react-icons/rx";
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";


const Cart = () => {
 
  return (
  <section className=''>
    <div className=" max-w-container mx-auto">
    <h2 className='font-DM font-bold text-[49px] text-[#262626] mt-20'>Cart</h2>
   <div className=" items relative pb-[130px] mb-20">
   <span className='font-DM font-normal text-[12px] text-[#767676] pe-[14px]'>Home</span>
    <span className='font-DM font-normal text-[16px] text-[#767676]  absolute left-[8.2%] sm:left-[4.6%] lg:left-[3.2%] xl:left-[2.2%] top-2'> <MdKeyboardArrowRight />  </span>
    <span className='font-DM font-normal text-[12px] text-[#767676]' >Cart</span>
   </div>
   <div className="">
    <div className="flex flex-wrap bg-[#f5f7f7]">
      <div className="w-1/4 py-[32px] ps-[20px] font-bold text-[16px]">Product</div>
      <div className="w-1/4 py-[32px] ps-[20px] font-bold text-[16px]">Price</div>
      <div className="w-1/4 py-[32px] ps-[20px] font-bold text-[16px]">Quantity</div>
      <div className="w-1/4 py-[32px] ps-[20px] font-bold text-[16px]">Total</div>
    </div>
    <div className="flex ">
      <div className="w-1/4 flex items-center gap-1 py-[32px] ps-[20px] font-bold text-[16px]"><span><RxCross2 /></span><span>images</span><span>product name</span></div>
      <div className="w-1/4 py-[32px] ps-[20px] font-bold text-[16px]">$44</div>
      <div className="w-1/4 flex gap-1">
      <div className=" py-[32px] ps-[20px] font-bold text-[16px]">+</div>
      <div className="py-[32px] ps-[20px] font-bold text-[16px]">1</div>
      <div className="py-[32px] ps-[20px] font-bold text-[16px]">-</div>
      </div>
      <div className="w-1/4 py-[32px] ps-[20px] font-bold text-[16px]">$44</div>
    </div>
   </div>
    </div>
  </section>
  )
}

export default Cart