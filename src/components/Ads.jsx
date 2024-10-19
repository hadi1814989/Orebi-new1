import React from 'react'
import ads1 from "../assets/ads-img1.jpg"
import ads2 from "../assets/ads-img-2.jpg"
import ads3 from "../assets/ads-img-3.jpg"
import ads4 from "../assets/ads-img-4.jpg"
import ads5 from "../assets/ads-img-5.jpg"
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';

const Ads = () => {
    // const settings = {
    //     dots: false,
    //     arrows: false,
    //     infinite: true,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear',
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // };
    // const settings1 = {
    //     dots: false,
    //     arrows: false,
    //     infinite: true,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear',
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // };
    // const settings2 = {
    //     dots: false,
    //     arrows: false,
    //     infinite: true,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear',
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // };
  return (
   <section className='mt-[140px] mb-[128px]'>
    <div className="max-w-container mx-auto flex">
        <div className="w-[49%]">
        {/* <Slider {...settings}> */}
                        <div className=' relative'>
                            <img className='w-full lg:h-[596px] h-[300px]' src={ads2} alt="Slide 1" />
                             {/* <div className=" absolute left-[-60%] sm:left-[-17%] xl:left-[-12%] xl:bottom-[3.5rem] bottom-[3.5rem]">
          <h2 className='lg:pb-[13px] pb-0 font-DM font-bold text-[24px] sm:text-[28px] lg:text-[49px] leading-[41px] sm:leading-[64px] pl-[120px]'>Phones Sale</h2>
          <p className='font-DM text-[#6D6D6D] text-[11px] lg:text-[16px] pb-[25px] pl-[120px]'>Up to <b className='font-DM font-bold lg:text-[40px] text-[28px] text-[#262626]'>50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[120px] py-[16px] px-[16px] lg:px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div> */}
                        </div>
                        {/* <div className=' relative'>
                            <img className='w-full lg:h-[596px] h-[300px]' src={ads4} alt="Slide 2" />
                             <div className=" absolute left-[-60%] sm:left-[-17%] xl:left-[-12%] xl:bottom-[3.5rem] bottom-[3.5rem]">
          <h2 className='lg:pb-[13px] pb-0 font-DM font-bold text-[24px] sm:text-[28px] lg:text-[49px] leading-[41px] sm:leading-[64px] pl-[120px]'>Phones Sale</h2>
          <p className='font-DM text-[#6D6D6D] text-[11px] lg:text-[16px] pb-[25px] pl-[120px]'>Up to <b className='font-DM font-bold lg:text-[40px] text-[28px] text-[#262626]'>50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[120px] py-[16px] px-[16px] lg:px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div>
                        </div> */}
                        {/* <div className=' relative'>
                            <img className='w-full lg:h-[596px] h-[300px]' src={ads5} alt="Slide 3" />
                             <div className=" absolute left-[-60%] sm:left-[-17%] xl:left-[-12%] xl:bottom-[3.5rem] bottom-[3.5rem]">
          <h2 className='lg:pb-[13px] pb-0 font-DM font-bold text-[24px] sm:text-[28px] lg:text-[49px] leading-[41px] sm:leading-[64px] pl-[120px]'>Phones Sale</h2>
          <p className='font-DM text-[#6D6D6D] text-[11px] lg:text-[16px] lg:pb-[35px] pb-[25px] pl-[120px]'>Up to <b className='font-DM font-bold lg:text-[40px] text-[28px] text-[#262626]'>50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[120px] py-[16px] px-[16px] lg:px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div>
                        </div> */}
         {/* </Slider> */}
        </div>
        <div className="w-[49%]">
                <div className="">
                {/* <Slider {...settings1}> */}
                        <div>
                        <img className='w-full lg:h-[283px] h-[131px] mb-[38px]  lg:mb-[30px]' src={ads1} alt="" />
                        {/* <div className=" absolute left-[-52%] sm:left-[-17%] xl:left-[-12%] xl:bottom-[3.5rem] bottom-[3.5rem]">
          <h2 className='lg:pb-[13px] pb-0 font-DM font-bold text-[18px] lg:text-[49px] leading-[50px] lg:leading-[64px] pl-[120px]'>Electronics Sale</h2>
          <p className='font-DM text-[#6D6D6D] text-[9px] lg:text-[16px] lg:pb-[35px] pb-[6px] pl-[120px]'>Up to <b className='font-DM font-bold lg:text-[40px] text-[12px] sm:text-[14px] text-[#262626] '>50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[120px] py-[7px] lg:py-[16px] px-[16px] sm:text-[14px] text-[11px] lg:px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div> */}
                        </div>
                        {/* <div>
                        <img className='w-full lg:h-[283px] h-[131px]    mb-[25px]' src={ads3} alt="" />
                          <div className=" absolute left-[-52%] sm:left-[-17%] xl:left-[-12%] xl:bottom-[3.5rem] bottom-[3.5rem]">
          <h2 className='lg:pb-[13px] pb-0 font-DM font-bold text-[18px] lg:text-[49px] leading-[50px] lg:leading-[64px] pl-[120px]'>Electronics Sale</h2>
          <p className='font-DM text-[#6D6D6D] text-[9px] lg:text-[16px] lg:pb-[35px] pb-[6px] pl-[120px]'>Up to <b className='font-DM font-bold lg:text-[40px] text-[12px] sm:text-[14px] text-[#262626]'> 50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[120px] py-[7px] lg:py-[16px] px-[16px] sm:text-[14px] text-[11px] lg:px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div>
                        </div> */}
                        {/* <div>
                        <img className='w-full lg:h-[283px] h-[131px]   mb-[25px]' src={ads1} alt="" />
                          <div className=" absolute left-[-52%] sm:left-[-17%] xl:left-[-12%] xl:bottom-[3.5rem] bottom-[3.5rem]">
          <h2 className='lg:pb-[13px] pb-0 font-DM font-bold text-[18px] lg:text-[49px] leading-[50px] lg:leading-[64px] pl-[120px]'>Electronics Sale</h2>
          <p className='font-DM text-[#6D6D6D] text-[9px] lg:text-[16px] lg:pb-[35px] pb-[6px] pl-[120px]'>Up to <b className='font-DM font-bold lg:text-[40px] text-[12px] sm:text-[14px] text-[#262626]'> 50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[120px] py-[7px] lg:py-[16px] px-[16px] sm:text-[14px] text-[11px] lg:px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div>
                        </div> */}
                        {/* <div>
                        <img className='w-full lg:h-[283px] h-[131px]    mb-[25px]' src={ads3} alt="" />
                          <div className=" absolute left-[-52%] sm:left-[-17%] xl:left-[-12%] xl:bottom-[3.5rem] bottom-[3.5rem]">
          <h2 className='lg:pb-[13px] pb-0 font-DM font-bold text-[18px] lg:text-[49px] leading-[50px] lg:leading-[64px] pl-[120px]'>Electronics Sale</h2>
          <p className='font-DM text-[#6D6D6D] text-[9px] lg:text-[16px] lg:pb-[35px] pb-[6px] pl-[120px]'>Up to <b className='font-DM font-bold lg:text-[40px] text-[12px] sm:text-[14px] text-[#262626]'> 50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[120px] py-[7px] lg:py-[16px] px-[16px] sm:text-[14px] text-[11px] lg:px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div>
                        </div> */}
         {/* </Slider> */}
         </div>
            <div className="">
            {/* <Slider {...settings2}> */}
                        <div>
                        <img className='w-full lg:h-[283px] h-[131px]' src={ads3} alt="" />
                                       {/* <div className=" absolute left-[-52%] sm:left-[-17%] xl:left-[-12%] xl:bottom-[3.5rem] bottom-[2.0rem]">
          <h2 className='lg:pb-[13px] pb-0 font-DM font-bold text-[18px] lg:text-[49px] leading-[50px] lg:leading-[64px] pl-[120px]'>Furniture Offer</h2>
          <p className='font-DM text-[#6D6D6D] text-[9px] lg:text-[16px] lg:pb-[35px] pb-[6px]  pl-[120px]'>Up to <b className='font-DM font-bold lg:text-[40px] text-[12px] sm:text-[14px] text-[#262626]'>50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[120px] py-[7px] lg:py-[16px] px-[16px] sm:text-[14px] text-[11px] lg:px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div> */}
                        </div>
                        {/* <div>
                        <img className='w-full lg:h-[283px] h-[131px] ' src={ads1} alt="" />
                                       <div className=" absolute left-[-52%] sm:left-[-17%] xl:left-[-12%] xl:bottom-[3.5rem] bottom-[27px]">
          <h2 className='lg:pb-[13px] pb-0 font-DM font-bold text-[18px] lg:text-[49px] leading-[50px] lg:leading-[64px] pl-[120px]'>Furniture Offer</h2>
          <p className='font-DM text-[#6D6D6D] text-[9px] lg:text-[16px] lg:pb-[35px] pb-[6px]  pl-[120px]'>Up to <b className='font-DM font-bold lg:text-[40px] text-[12px] sm:text-[14px] text-[#262626]'>50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[120px] py-[7px] lg:py-[16px] px-[16px] sm:text-[14px] text-[11px] lg:px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div>
                        </div>
                        <div>
                        <img className='w-full lg:h-[283px] h-[131px]' src={ads3} alt="" />
                                       <div className=" absolute left-[-52%] sm:left-[-17%] xl:left-[-12%] xl:bottom-[3.5rem] bottom-[27px]">
          <h2 className='lg:pb-[13px] pb-0 font-DM font-bold text-[18px] lg:text-[49px] leading-[50px] lg:leading-[64px] pl-[120px]'>Furniture Offer</h2>
          <p className='font-DM text-[#6D6D6D] text-[9px] lg:text-[16px] lg:pb-[35px] pb-[6px]  pl-[120px]'>Up to <b className='font-DM font-bold lg:text-[40px] text-[12px] sm:text-[14px] text-[#262626]'>50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[120px] py-[7px] lg:py-[16px] px-[16px] sm:text-[14px] text-[11px] lg:px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div>
                        </div>
                        <div>
                        <img className='w-full lg:h-[283px] h-[131px] ' src={ads1} alt="" />
                                       <div className=" absolute left-[-52%] sm:left-[-17%] xl:left-[-12%] xl:bottom-[3.5rem] bottom-[27px]">
          <h2 className='lg:pb-[13px] pb-0 font-DM font-bold text-[18px] lg:text-[49px] leading-[50px] lg:leading-[64px] pl-[120px]'>Furniture Offer</h2>
          <p className='font-DM text-[#6D6D6D] text-[9px] lg:text-[16px] lg:pb-[35px] pb-[6px]  pl-[120px]'>Up to <b className='font-DM font-bold lg:text-[40px] text-[12px] sm:text-[14px] text-[#262626]'>50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[120px] py-[7px] lg:py-[16px] px-[16px] sm:text-[14px] text-[11px] lg:px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div>
                        </div> */}
         {/* </Slider> */}
            </div>
        </div>
    </div>
   </section>
  )
}

export default Ads