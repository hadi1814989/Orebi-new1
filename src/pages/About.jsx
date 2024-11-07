import React from 'react'
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import aboutImg from "../assets/arrimg1.png"
const About = () => {
  return (
    <div className="max-w-container mx-auto">
        <div className=" pb-[136px]">
        <h3 className="font-sans text-[49px] font-bold text-[#262626] ">
          About
        </h3>
        <div className="flex items-center py-4">
          <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
            <Link to="/">Home</Link>
          </h2>
          <IoIosArrowForward />
          <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
            <Link to="/about">About</Link>
          </h2>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[45%] flex justify-around">
          <img src={aboutImg} alt="" className="w-full" />
        </div>
        <div className="w-[45%]">
          <img src={aboutImg} alt="" className="w-full" />
        </div>
      </div>
      <div className="pt-[128px] pb-[118px]">
        <p className="font-sans font-normal text-[36px] text-[#262626]">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </p>
      </div>
      <div className="flex justify-between pb-10">
        <div className="w-[30%]">
          <h4 className="font-sans font-bold text-[25px] text-[#262626] pb-[12px] ">
            Our Vision
          </h4>
          <p className="font-sans font-normal text-[16px] text-[#767676] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="w-[30%]">
          <h4 className="font-sans font-bold text-[25px] text-[#262626] pb-[12px] ">
            Our Story
          </h4>
          <p className="font-sans font-normal text-[16px] text-[#767676] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic.
          </p>
        </div>
        <div className="w-[30%]">
          <h4 className="font-sans font-bold text-[25px] text-[#262626] pb-[12px] ">
            Our Brands
          </h4>
          <p className="font-sans font-normal text-[16px] text-[#767676] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>
      </div>
    </div>
  )
}
export default About