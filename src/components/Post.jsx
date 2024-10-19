import React, { useContext } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { DiGitCompare } from "react-icons/di";
import { ApiData } from './Contextapi';
import { Link } from 'react-router-dom';

const Post = ({allPage}) => {
    let {info , loading} = useContext(ApiData)
    console.log(allPage);
    

    
  return (
    <>
   
    {allPage.map((item)=> (

   <div className=" w-full sm:w-[50%] lg:w-1/3 flex">
     <div className="w-[100%]">
        <div className=' relative group overflow-hidden sm:ms-6 lg:ms-0 ms-4'>
        <Link to={`/product/${item.id}`}><img className='w-[100%] ' src={item.thumbnail} alt="" /></Link>
<div className="absolute left-0 bottom-[70px] lg:bottom-[69px] sm:bottom-[70px] bg-white shadow-md sm:w-[100%] lg:w-[100%] w-[100%] h-0 group-hover:h-[40%] text-right pr-5 transition-all duration-300">
<p className='hidden group-hover:block pt-5 animate__fadeInDown'>Add to Wish List &nbsp; &nbsp;   <FaHeart className='inline-block' /> </p>
<p className='py-[21px] lg:py-[21px] sm:py-3 hidden group-hover:block animate__fadeInDown'>Compare &nbsp; &nbsp;  <DiGitCompare className='inline-block' /> </p>
   <h2 className='hidden group-hover:block animate__fadeInDown'>Add to Cart &nbsp; &nbsp; <FaCartShopping className='inline-block' /> </h2>
</div>
      <div className=" absolute left-3 top-5">
        <a href="#" className='font-DM font-bold text-[14px] text-black py-[8px] px-[30px] border-2 border-black hover:bg-black  hover:text-white duration-300'>New</a>
      </div>
      <div className=" relative lg:pt-0 sm:pt-3">
        <h4 className='pb-[15px] pt-2 font-bold font-DM text-[15px] lg:text-[15px] sm:text-[11px]'>{item.title}</h4>
        <p className='text-[#767676] font-DM text-[16px] font-normal'>{item.brand}</p>
        <div className=" absolute right-10 top-2 lg:top-2 sm:top-4 text-[#767676] font-DM font-normal">
            <span>${item.price}</span>
        </div>
      </div>
    </div>
    </div>
   </div>
    ))}
    </>
  )
}

export default Post