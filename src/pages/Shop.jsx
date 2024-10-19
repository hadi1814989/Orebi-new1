import React, { useState, useContext } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Link } from 'react-router-dom';
import Post from '../components/Post';
import { ApiData } from '../components/Contextapi';
import Pagination from '../components/Pagination';
// import Slider from "react-slick";

const Shop = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   appendDots: dots => (
  //     <div
  //       style={{
  //         backgroundColor: "#ddd",
  //         borderRadius: "10px",
  //         padding: "10px"
  //       }}
  //     >
  //       <ul style={{ margin: "0px" }}> {dots} </ul>
  //     </div>
  //   ),
  //   customPaging: i => (
  //     <div
  //       style={{
  //         width: "30px",
  //         color: "blue",
  //         border: "1px blue solid"
  //       }}
  //     >
  //       {i + 1}
  //     </div>
  //   )
  // };
  let {info , loading} = useContext(ApiData)
  let [currentPage , setCurrentPage] = useState(1)
  let [perPage , setPerPage] = useState(6)
  let lastPage = currentPage * perPage
  let fristPage = lastPage - perPage
  let allPage = info.slice(fristPage , lastPage)
  let pageNumber = [];
  for (let i = 0; i < Math.ceil(info.length / perPage); i++) {
    pageNumber.push(i);
  }
  let [show , setShow] = useState(false)
  let [show1 , setShow1] = useState(false)
  let [show2 , setShow2] = useState(false)
  let [show3 , setShow3] = useState(false)
  return (
<section className='xl:pt-[138px] pt-10 pb-[126px] '>
  <div className="max-w-container mx-auto">
    <h2 className='font-DM font-bold text-[49px] text-[#262626]'>Products</h2>
   <div className=" items relative pb-[130px]">
   <span className='font-DM font-normal text-[12px] text-[#767676] pe-[14px]'>Home</span>
    <span className='font-DM font-normal text-[16px] text-[#767676]  absolute left-[8.2%] sm:left-[4.6%] lg:left-[3.2%] xl:left-[2.2%] top-2'> <MdKeyboardArrowRight />  </span>
    <span className='font-DM font-normal text-[12px] text-[#767676]' >  Products</span>
   </div>
    <div className="flex flex-wrap">
      <div className=" ms-2 sm:ms-0 w-full sm:w-1/5">
        <div className="">
        <div onClick={()=> setShow(!show)}  className="flex flex-wrap  justify-between items-center pe-10 pb-[35px]">
        <h2  className="font-DM font-bold text-[20px] text-center sm:text-start ">Shop by Category</h2>
        { show ? <FaMinus/> : <FaPlus/>}
        </div>
          {show && (
          <ul>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] '>Category1</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Category2</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Category3</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Category4</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Category5</li>
          </ul>
          )}
          </div>
        <div className="">
        <div onClick={()=> setShow1(!show1)}  className="flex flex-wrap  justify-between items-center pe-10 py-[35px]">
        <h2  className="font-DM font-bold text-[20px] ">Shop by Color</h2>
        { show1 ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
        </div>
          {show1 && (
          <ul>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] '>Color1</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Color2</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Color3</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Color4</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Color5</li>
          </ul>
          )}
          </div>
        <div className="">
        <div onClick={()=> setShow2(!show2)}  className="flex flex-wrap  justify-between items-center pe-10 py-[35px]">
        <h2  className="font-DM font-bold text-[20px] ">Shop by Brand</h2>
        { show2 ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
        </div>
          {show2 && (
          <ul>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] '>Brand1</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Brand2</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Brand3</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Brand4</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Brand5</li>
          </ul>
          )}
          </div>
        <div className="">
        <div onClick={()=> setShow3(!show3)}  className="flex flex-wrap  justify-between items-center pe-10 py-[35px]">
        <h2  className="font-DM font-bold text-[20px] ">Shop by Price</h2>
        { show3 ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
        </div>
          {show3 && (
          <ul>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] '>$0.00 - $9.99</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>$10.00 - $19.99</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>$20.00 - $29.99</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>$30.00 - $39.99</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>$40.00 - $69.99</li>
          </ul>
          )}
          </div>
      </div>
      <div className=" sm:ms-0 ms-2 w-full sm:w-4/5">
      <div className="flex flex-wrap sm:justify-end">
        <div className="">
          <label className='text-[#767676] pe-5' htmlFor="">Sort By :</label>
          <select className='w-[200px] py-1 border-[#F0F0F0] border-2 rounded text-[#767676] me-10 ' name="" id="">
            <option value="">Featured</option>
            <option value="">Featured</option>
            <option value="">Featured</option>
            <option value="">Featured</option>
            <option value="">Featured</option>
          </select>
        </div>
        <div className="sm:pt-0 pt-3">
          <label className='text-[#767676] pe-8  sm:pe-5' htmlFor="">Show :</label>
          <select className=' w-[200px] sm:w-[100px] py-1 border-[#F0F0F0] border-2 rounded text-[#767676] ' name="" id="">
            <option value="">36</option>
            <option value="">35</option>
            <option value="">34</option>
            <option value="">33</option>
            <option value="">32</option>
          </select>
        </div>
      
      </div>
     <div className=" w-full">
     <div className="w-[100%] flex flex-wrap justify-between ">
      
    {loading ? ( <h2 className='text-[40px] font-DM text-center'>loading.....</h2>) :   (
      <Post allPage={allPage} />
      )}
      </div>
   <div className=" flex justify-center mt-10">
   <Pagination pageNumber={pageNumber} />
   </div>
     </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Shop