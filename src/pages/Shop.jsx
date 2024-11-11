import React, { useState, useContext, useEffect } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaList, FaPlus } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdGrid } from "react-icons/io";
import { Link } from 'react-router-dom';
import Post from '../components/Post';
import { ApiData } from '../components/Contextapi';
import Pagination from '../components/Pagination';
import products from '../data';




  const Shop = () => {
    let {info,loading} = useContext(ApiData)
    let [show , setShow] = useState(false)
    let [show1 , setShow1] = useState(false)
    let [show2 , setShow2] = useState(false)
    let [show3 , setShow3] = useState(false)
    let [Category, setCategory] = useState([])
    let [categoryFilter, setCategoryFilter] = useState([])
    let [brandFilter, setBrandFilter] = useState([])
    let [priceShow, setPriceShow] = useState([])
    let [Brand, setBrand] = useState([])
    let [low , setLow] = useState("")
    let [high , setHigh] = useState("")
    let [currentPage, setCurrentPage] = useState(1);
    let [perPage, setPerPage] = useState(6);
    let [showCategory , setShoeCategory] = useState(true)
    let [activeGrid, setActiveGrid] = useState("");
    let lastPage = currentPage * perPage;
    let firstPage = lastPage - perPage;
    let allPage = info.slice(firstPage, lastPage);
    let pageNumber = [];
    for (let i = 0; i < Math.ceil(categoryFilter.length > 0 ?  brandFilter.length > 0 ? brandFilter  : categoryFilter  : info.length / perPage); i++) {
      pageNumber.push(i);
    }
      let paginate = (paginate) => {
      setCurrentPage(paginate + 1);
    };
    let next = () => {
      if (currentPage < pageNumber.length) {
        setCurrentPage((state) => state + 1);
      }
    };
    let prev = () => {
      if (currentPage > 1) {
        setCurrentPage((state) => state - 1);
      }
    };
    let handleMulti = () => {
      setActiveGrid("active");
    };
    useEffect(()=>{
      setCategory([...new Set(info.map((item)=> item.category))])
      setBrand([...new Set(info.map((item)=> item.brand))])
    },[info])
   
    let handleCategory = (citem)=>{
     let filterItem = info.filter((item)=> item.category == citem)
     setCategoryFilter(filterItem)
    }
    
    
    let handleBrand = (bitem)=>{
      let filterItem1 = info.filter((item)=> item.brand == bitem)
      setCategoryFilter(filterItem1)
    }
    let handelChange = (e)=>{
      setPerPage(e.target.value)
    }
    let handleAll = ()=>{
      setCategoryFilter("")
    }
    let handlePrice = (value)=>{
      setLow(value.low);
      setHigh(value.high);
      let priceRange = info.filter((item)=> item.price > value.low & item.price < value.high )
      if(priceRange.length > 0){
        setCategoryFilter(priceRange);
      }else{
         setCategoryFilter("")
      }
    }
    let handlePrice1 = (value1)=>{
      setLow(value1.low);
      setHigh(value1.high);
      let priceRange1 = info.filter((item)=> item.price > value1.low & item.price < value1.high )
      if(priceRange1.length > 0){
        setCategoryFilter(priceRange1);
      }else{
         setCategoryFilter("")
      }
    }
    let handlePrice2 = (value2)=>{
      setLow(value2.low);
      setHigh(value2.high); 
      let priceRange2 = info.filter((item)=> item.price > value2.low & item.price < value2.high )
      if(priceRange2.length > 0){
        setCategoryFilter(priceRange2);
      }else{
         setCategoryFilter("")
      }
    }
  
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
              <li onClick={handleAll}  className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] '>All product</li>
            {Category.map((item)=>(
              <li onClick={()=>handleCategory(item)} className='text-[#767676] text-[16px] font-DM font-normal py-[19px] border-b-2 border-b-[#F0F0F0] '>{item}</li>
            ))} 
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
            {Brand.map((item)=>(
              <li onClick={()=>handleBrand(item)} className='text-[#767676] text-[16px] font-DM font-normal py-[19px] border-b-2 border-b-[#F0F0F0] '>{item}</li>
            ))}
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
            <li onClick={ ()=> handlePrice({low:0 , high : 10})} className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] '>$0.00 - $9.99</li>
            <li onClick={ ()=> handlePrice1({low:10 , high : 20})} className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>$10.00 - $19.99</li>
            <li onClick={ ()=> handlePrice2({low:20 , high : 30})} className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>$20.00 - $29.99</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>$30.00 - $39.99</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>$40.00 - $69.99</li>
          </ul>
          )}
          </div>
      </div>
      <div className=" sm:ms-0 ms-2 w-full sm:w-4/5">
     <div className="flex justify-between items-center">
     <div className="flex items-center gap-x-4">
                <div
                    onClick={() => setActiveGrid("")}
                    className=   {`p-3 hover:bg-[gray] text-[#222] ${activeGrid == "active" ?  " " : "  bg-[gray] rounded"} `}
                  >
                    <IoGrid className={activeGrid === "active" ?  "text-[#222]" :"text-white" } />
                  </div>
                  <div
                    onClick={handleMulti}
                    className={` p-3  hover:bg-[gray] text-[#222] ${activeGrid== "active"? " bg-[gray] rounded": "  "}`}
                  >
                    <FaList className={activeGrid === "active" ? "text-white":"text-[#222]" }/>
                  </div>
                </div>
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
          <label  className='text-[#767676] pe-8  sm:pe-5' htmlFor="">Show :</label>
          <select onChange={handelChange} className=' w-[200px] sm:w-[100px] py-1 border-[#F0F0F0] border-2 rounded text-[#767676] ' name="" id="">
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="10">10</option>
            <option value="12">12</option>
          
          </select>
        </div>
      
      </div>
     </div>
     <div className=" w-full">
     <div className="flex flex-wrap justify-between ">
      
     {loading ? (
    <h2 className='text-[40px] font-DM text-center'>loading.....</h2>
) : (
   
    <Post allPage={allPage} activeGrid={activeGrid} 
          categoryFilter={categoryFilter} 
          brandFilter={brandFilter}
          priceShow={priceShow}
   />
)}
      </div>
   <div className=" flex justify-center mt-10">
   <Pagination pageNumber={pageNumber} 
               paginate={paginate}
               next={next}
               prev={prev}
               currentPage={currentPage}
   />
   </div>
     </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Shop