import React from 'react';
import Container from '../../Shared/Container';
import '../../Shared/Style.css';
import BackUp from '../../assets/Image/backUp.png'
import cloud from '../../assets/Image/cloude.png'
import finance from '../../assets/Image/finance.png'
import EasyPay from '../../assets/Image/easyPay.png'
import img02 from '../../assets/Image/02.png'
import animationBG from '../../assets/Image/NST_M11_05.png'
import Nst04 from '../../assets/Image/NST_M11_04.png'
import quote from '../../assets/Image/quote.png'
import star from '../../assets/Image/star.png'
import oval from '../../assets/Image/Oval.png'
import oval2 from '../../assets/Image/Oval2.png'
import oval3 from '../../assets/Image/Oval3.png'
import codeLab from '../../assets/Image/code lav.png'
import niraState from '../../assets/Image/niraState.png'
import live from '../../assets/Image/live.png'
import goldLine from '../../assets/Image/goldlin.png'
import circle from '../../assets/Image/circle.png'
import fb from '../../assets/Image/facebook.png'
import tw from '../../assets/Image/twitter.png'
import instra from '../../assets/Image/instagram.png'
import bank1 from '../../assets/Image/2.png'
import bank2 from '../../assets/Image/1.png'
import bank3 from '../../assets/Image/3.png'
import SectionTitle from '../../Shared/SectionTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';




const Home = () => {
    return (
        <>

            <Container >
                <header className=' bg_Banner h-[213.281px]    lg:h-[700px]   xl:h-[959.412px]  2xl:h-[1200px]'>

                    <nav className=' lg:w-auto containerWidth xl:px-[150px] sm:px-[60px] px-5 lg:px-[75px]  mx-auto pt-[24px] sm:pt-[20px] lg:pt-[35px] flex justify-between items-center'>

                        <div>
                            <h1 className='Bold font-bold text-[22px] lg:text-[30px] text-[#FFF]'>Xpeed Cloud</h1>

                        </div>
                        <div className='lg:flex hidden   gap-[30px]'>
                            <h1 className='Normal font-normal text-white hover:text-slate-300 text-[16px]'>Solution</h1>
                            <h1 className='Normal font-normal text-white hover:text-slate-300 text-[16px]'>Why choose us</h1>
                            <h1 className='Normal font-normal text-white hover:text-slate-300 text-[16px]'>Features</h1>
                            <h1 className='Normal font-normal text-white hover:text-slate-300 text-[16px]'>Pricing</h1>

                        </div>


                    </nav>
                    <section>
                        <div className='containerWidth pb-[20px] mx-auto px-5 lg:px-0 sm:pt-[50px]  pt-[31px] lg:pt-[100px] xl:pt-[154px]'>
                            <h1 data-aos="fade-right" data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="false"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                                className='Medium font-medium text-[30px] lg:text-[40px] xl:text-[65px] lg:w-[775px] mx-auto text-center text-[#FFF]'>Everything You Need To Do Better Work</h1>


                            <p data-aos="fade-left" data-aos-delay="50"
                                data-of
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="true"
                                data-aos-offset="200"
                                className='mt-[15px] lg:mt-[25px]  text-center Normal mx-auto text-[#fff] text-lg lg:w-[663px]'>
                                Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard.
                            </p>

                            <div className='lg:flex justify-center gap-[25px]  mt-[35px]'>
                                <div className='lg:px-0 px-[36px] lg:block flex justify-center'>
                                    <button data-aos="fade-right" data-aos-delay="50"
                                        data-of
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="true"
                                        data-aos-offset="200"
                                        className='lg:w-[195px] sm:w-full w-[194px] h-[49px]  lg:h-[59px]  py-[15px] lg:py-5  ChosePlan Gradient  text-[#fff] text-[16px] Bold'>
                                        Get Started
                                    </button>
                                </div>
                                <div className='lg:px-0 px-[36px] lg:mb-0 lg:block flex justify-center '>
                                    <button data-aos="fade-right" data-aos-delay="50"
                                        data-of
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="true"
                                        data-aos-offset="200"

                                        className='lg:w-[200px] sm:w-full w-[194px] h-[49px] mt-5 sm:mt-0 lg:h-[60px] hover:bg-gradient-to-r from-[#25DEEE] to-[#38A6E0] hover:border-none border-[0.5px] border-white rounded-[8px]  py-[15px] lg:py-5 text-[#fff] text-[16px] Bold  '>
                                        Watch Trailer
                                    </button>
                                </div>
                            </div>

                        </div>
                    </section>




                </header>

                {/* Our Solution */}

                <section>

                    <div className='  lg:mt-0 mt-[50px] containerWidth mx-auto lg:w-[563px] text-center'>
                        <h1 data-aos="fade-right" data-aos-delay="50"
                            data-of
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-offset="200" className='text-[#321C3C] text-[25px] lg:text-[35px] xl:text-[48px] Normal'>Our Solution</h1>
                        <p data-aos="fade-left" data-aos-delay="50"
                            data-of
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-offset="200" className='text-[#413F42] lg:px-0 px-5 text-lg Light font-light mt-5 '>When it comes to choosing the right web hosting provider, we know how easy it is to get overwhelmed with the number.

                        </p>



                    </div>


                    <div className='containerWidth mx-auto lg:px-[150px] px-[24px] mt-[30px] lg:mt-[50px]'>

                        <div data-aos="fade-up" data-aos-delay="50"
                            data-of
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-offset="200" className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-4'>
                            <div>

                                <div className="card w-[273px] sm:w-auto xl:w-[273px] 2xl:w-auto  mx-auto lg:mx-0 hover:shadow-lg hover:shadow-slate-300  bg-base-100 Box_shadow">
                                    <div className='xl:pt-[50px] pt-[30px] xl:px-[86px] lg:pt-[30px] lg:px-[50px]'>
                                        <img src={BackUp} className='w-[100px] h-[100px]  mx-auto  ' alt="BackUp" />


                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-[#27162E] text-[20px] Medium px-[44px] mt-[30px]">Automated Backup</h2>
                                        <p className='text-lg font-normal Normal px-5 pb-[50px] mt-4'>About 64% of all on-line teens say that do things online that they.</p>

                                    </div>
                                </div>

                            </div>

                            {/* 2 */}


                            <div>

                                <div className="card hover:shadow-lg hover:shadow-slate-300 w-[273px] sm:w-auto mx-auto lg:mx-0  xl:w-[273px] 2xl:w-auto  bg-base-100 Box_shadow">
                                    <div className='xl:pt-[50px] pt-[30px] xl:px-[86px] lg:pt-[30px] lg:px-[50px]'>
                                        <img src={cloud} className='w-[100px] h-[100px]  mx-auto' alt="BackUp" />


                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-[#27162E] text-[20px] Medium px-[44px] mt-[30px]">Finance Assistant</h2>
                                        <p className='text-lg font-normal Normal px-5 pb-[50px] mt-4'>About 64% of all on-line teens say that do things online that they.</p>

                                    </div>
                                </div>

                            </div>

                            {/* 3 */}
                            <div>

                                <div className="card hover:shadow-lg hover:shadow-slate-300 w-[273px] sm:w-auto mx-auto lg:mx-0  xl:w-[273px] 2xl:w-auto  bg-base-100 Box_shadow">
                                    <div className='xl:pt-[50px] pt-[30px] xl:px-[86px] lg:pt-[30px] lg:px-[50px]'>
                                        <img src={finance} className='w-[100px] h-[100px] mx-auto  ' alt="BackUp" />


                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-[#27162E] text-[20px] Medium px-[44px] mt-[30px]">Finance Assistant</h2>
                                        <p className='text-lg font-normal Normal px-5 pb-[50px] mt-4'>About 64% of all on-line teens say that do things online that they.</p>

                                    </div>
                                </div>

                            </div>

                            {/* 4 */}
                            <div>

                                <div className="card hover:shadow-lg hover:shadow-slate-300 w-[273px] sm:w-auto mx-auto lg:mx-0 xl:w-[273px] 2xl:w-auto  bg-base-100 Box_shadow">
                                    <div className='xl:pt-[50px] pt-[30px] xl:px-[86px] lg:pt-[30px] lg:px-[50px]'>
                                        <img src={EasyPay} className='w-[100px] h-[100px] mx-auto ' alt="BackUp" />


                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-[#27162E] text-[20px] Medium px-[44px] mt-[30px]">Easy Payment</h2>
                                        <p className='text-lg font-normal Normal px-5 pb-[50px] mt-4'>About 64% of all on-line teens say that do things online that they.</p>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>


                {/* Why Choose Us */}

                <section>
                    <div data-aos="fade-up" data-aos-delay="50"
                        data-of
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-offset="200"
                        className=' containerWidth mx-auto px-5 lg:px-0 lg:w-[563px] text-center mt-[50px] lg:mt-[100px] xl:mt-[180px]'>
                        <h1 className='text-[#321C3C] text-[25px] lg:text-[48px] Normal'>Why Choose Us</h1>
                        <p className='text-[#413F42] text-lg Light font-light mt-[15px] lg:mt-5 '>When it comes to choosing the right web hosting provider, we know how easy it is to get overwhelmed with the number.

                        </p>



                    </div>



                    <div className='containerWidth mx-auto mt-[30px] lg:mt-[50px] grid grid-cols-1 items-center lg:mb-[189px] lg:grid-cols-2 gap-[61px] lg:pr-[80px] xl:pr-[150px]'>

                        <div data-aos="fade-right" data-aos-delay="50"
                            data-of
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-offset="200" >
                            <img src={img02} className='xl:w-[676px]  2xl:w-auto 2xl:-ml-[140px] lg:-ml-[70px] xl:-ml-[100px]' alt="" />

                        </div>
                        <div data-aos="fade-left" data-aos-delay="50"
                            data-of
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-offset="200" className='px-5 lg:mt-0 mt-[30px] lg:px-0 2xl:w-auto xl:w-[498px]'>

                            <div className='lg:flex gap-[25px] items-start'>
                                <h1 className='text-[40px]  font-semibold SemiBold text-slate-200  xl:-mt-2'>01</h1>
                                <div>
                                    <h2 className='text-primary text-[20px] font-medium Medium '>Best Performance</h2>
                                    <p className='text-lg Light font-normal  lg:font-light mt-[10px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                </div>
                            </div>
                            <div className='lg:flex gap-[25px] items-start my-[33px]'>
                                <h1 className='text-[40px] font-semibold SemiBold text-slate-200 xl:-mt-2'>02</h1>
                                <div>
                                    <h2 className='text-primary text-[20px] font-medium Medium '>High Speed Servers</h2>
                                    <p className='text-lg Light  font-normal  lg:font-light mt-[10px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                </div>
                            </div>
                            <div className='lg:flex gap-[25px] items-start'>
                                <h1 className='text-[40px] font-semibold SemiBold text-slate-200  xl:-mt-2'>03</h1>
                                <div>
                                    <h2 className='text-primary text-[20px] font-medium Medium '>24/7 Support</h2>
                                    <p className='text-lg Light  font-normal  lg:font-light mt-[10px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>



                {/* How We Help Our Clients Measure Social */}

                <section>
                    <div className='containerWidth lg:mt-0 mt-[50px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[20px]'>
                        <div data-aos="fade-right" data-aos-delay="50"
                            data-of
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-offset="200"
                            className='lg:pl-[80px] xl:pl-[150px] lg:px-0 px-5'>
                            <SectionTitle tittle={"How We Help Our Clients Measure Social"} />

                            <p className='text-lg Normal font-normal text-[#413F42] mt-5 lg:mt-[25px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>

                            <h2 className='mt-[30px]  Medium font-medium text-[20px] text-[#321C3C]'>Customized registration</h2>
                            <p className='text-lg font-normal Normal mt-[15px] lg:mt-[10px] lg:w-[383px] '>It is a long established fact that a reader will be distracted by the readable.</p>


                            <h2 className='mt-[30px] Medium font-medium text-[20px] text-[#321C3C]'>Fast and simple Setup</h2>
                            <p className='text-lg font-normal Normal mt-[15px] lg:mt-[10px] lg:w-[383px] '>It is a long established fact that a reader will be distracted by the readable.</p>







                        </div>

                        <div className='mt-[30px] lg:mt-0' data-aos="fade-left" data-aos-delay="50"
                            data-of
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-offset="200" >
                            <img src={animationBG} className='lg:pr-[30px] lg:px-0 px-[10px] lg:w-[676px] 2xl:w-auto' alt="" />
                        </div>
                    </div>




                </section>


                {/* Making A New Trend In Poster Printing */}

                <section>
                    <div className='containerWidth mx-auto lg:px-[30px] mt-[50px] lg:mt-[184px] grid lg:grid-cols-2 grid-cols-1 gap-[50px]'>

                        <div data-aos="fade-right" data-aos-delay="50"
                            data-of
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-offset="200" >
                            <img src={Nst04} className='lg:w-[646.025px] px-[10px] lg:px-0 lg:pl-[30px] 2xl:w-auto' alt="" />

                        </div>
                        <div data-aos="fade-left" data-aos-delay="50"
                            data-of
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-offset="200" className='lg:pr-[80px]  lg:px-0 px-5  xl:pr-[150px]'>
                            <h1 className='text-[#321C3C]'>
                                <SectionTitle tittle={'Making A New Trend In Poster Printing'} />


                            </h1>

                            <p className='text-lg lg:mt-3 mt-5 xl:mt-[25px] text-[#413F42] font-normal Normal'>
                                Chances are unless you are very lucky you will go thru many different relationships before you find your special someone. Finding your sole mate is like gambling. <br /> <br />

                                During your life you will probably meet some people who seem like they may be the one, or that they are close, but still have the feeling that something else is missing. My advice is that if you are not happy, because something seems like it is missing, then it usually is not right the bus one day without ever knowing it.</p>

                        </div>

                    </div>
                </section>


                {/* Let’s Hear Our Happy Customer */}


                <section className='containerWidth mx-auto'>
                    <div className='mt-[30px] lg:mt-0 px-5 lg:px-0' data-aos="fade-up" data-aos-delay="50"
                        data-of
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-offset="200"

                    >

                        <h1 className='flex justify-center lg:mt-[100px] xl:mt-[182px] text-[#272223]'> <SectionTitle tittle={'Let’s Hear Our Happy Customer'} /></h1>

                        <p className='mx-auto text-center mt-[15px] lg:mt-5 lg:w-[563px] text-lg font-normal Normal'>
                            When it comes to choosing the right web hosting provider, we know how easy it is to get overwhelmed with the number.
                        </p>



                    </div>


                    {/* Swiper */}


                    <Swiper

                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className=" px-[150px]"
                    >

                        <SwiperSlide className='py-10' >

                            <div className="card sm:w-auto w-[260px] mx-auto xl:w-auto   bg-base-100 Box_shadow hover:shadow-xl hover:shadow-slate-300">
                                <div className='mt-[50px]  ml-[30px]'>
                                    <img src={quote} className='w-[46px] h-[36px] top-[50px] absolute  ' alt="BackUp" />


                                </div>
                                <div className="relative">

                                    <p className='lg:pl-[40px] pl-[25px] pr-[25px] lg:pr-[30px] text-[14px] lg:text-lg font-normal Normal   mt-4 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more..</p>

                                </div>

                                <div className=' pl-[40px] mt-[19px] flex gap-2'>
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />

                                </div>

                                <div className='lg:pl-[40px] pl-[25px] pr-[19px] pt-[33px] pb-[50px] flex gap-[15px] 2xl:gap-[30px]'>
                                    <img src={oval} className='w-[50px]   h-[50px]' alt="" />
                                    <div>
                                        <h1 className='text-[14px] lg:text-lg font-semibold SemiBold'>
                                            Tufayel Ahmed Nayef
                                        </h1>
                                        <p className='text-[14px] font-normal Normal text-[#272223]'>Visual Designer</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='py-10'>
                            <div className="card sm:w-auto w-[260px] mx-auto xl:w-auto   bg-base-100 Box_shadow hover:shadow-xl hover:shadow-slate-300">
                                <div className='mt-[50px]  ml-[30px]'>
                                    <img src={quote} className='w-[46px] h-[36px] top-[50px] absolute  ' alt="BackUp" />


                                </div>
                                <div className="relative">

                                    <p className='lg:pl-[40px] pl-[25px] pr-[25px] lg:pr-[30px] text-[14px] lg:text-lg font-normal Normal   mt-4 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more..</p>

                                </div>

                                <div className=' pl-[40px] mt-[19px] flex gap-2'>
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />

                                </div>

                                <div className='lg:pl-[40px] pl-[25px] pr-[19px] pt-[33px] pb-[50px] flex gap-[15px] 2xl:gap-[30px]'>
                                    <img src={oval2} className='w-[50px]   h-[50px]' alt="" />
                                    <div>
                                        <h1 className='text-[14px] lg:text-lg font-semibold SemiBold'>
                                            Tufayel Ahmed Nayef
                                        </h1>
                                        <p className='text-[14px] font-normal Normal text-[#272223]'>Visual Designer</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='py-10'>
                            <div className="card sm:w-auto w-[260px] mx-auto xl:w-auto   bg-base-100 Box_shadow hover:shadow-xl hover:shadow-slate-300">
                                <div className='mt-[50px]  ml-[30px]'>
                                    <img src={quote} className='w-[46px] h-[36px] top-[50px] absolute  ' alt="BackUp" />


                                </div>
                                <div className="relative">

                                    <p className='lg:pl-[40px] pl-[25px] pr-[25px] lg:pr-[30px] text-[14px] lg:text-lg font-normal Normal   mt-4 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more..</p>

                                </div>

                                <div className=' pl-[40px] mt-[19px] flex gap-2'>
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />

                                </div>

                                <div className='lg:pl-[40px] pl-[25px] pr-[19px] pt-[33px] pb-[50px] flex gap-[15px] 2xl:gap-[30px]'>
                                    <img src={oval3} className='w-[50px]   h-[50px]' alt="" />
                                    <div>
                                        <h1 className='text-[14px] lg:text-lg font-semibold SemiBold'>
                                            Tufayel Ahmed Nayef
                                        </h1>
                                        <p className='text-[14px] font-normal Normal text-[#272223]'>Visual Designer</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='py-10'>
                            <div className="card sm:w-auto w-[260px] mx-auto xl:w-auto   bg-base-100 Box_shadow hover:shadow-xl hover:shadow-slate-300">
                                <div className='mt-[50px]  ml-[30px]'>
                                    <img src={quote} className='w-[46px] h-[36px] top-[50px] absolute  ' alt="BackUp" />


                                </div>
                                <div className="relative">

                                    <p className='lg:pl-[40px] pl-[25px] pr-[25px] lg:pr-[30px] text-[14px] lg:text-lg font-normal Normal   mt-4 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more..</p>

                                </div>

                                <div className=' pl-[40px] mt-[19px] flex gap-2'>
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />
                                    <img src={star} className='w-[12px] h-[11px]' alt="" />

                                </div>

                                <div className='lg:pl-[40px] pl-[25px] pr-[19px] pt-[33px] pb-[50px] flex gap-[15px] 2xl:gap-[30px]'>
                                    <img src={oval3} className='w-[50px]   h-[50px]' alt="" />
                                    <div>
                                        <h1 className='text-[14px] lg:text-lg font-semibold SemiBold'>
                                            Tufayel Ahmed Nayef
                                        </h1>
                                        <p className='text-[14px] font-normal Normal text-[#272223]'>Visual Designer</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                    </Swiper>










                </section>

                {/* Pricing Plans */}
                <section>

                    <div className='containerWidth mx-auto'>
                        <div className='text-center mt-[50px] sm:mt-[100px] lg:mt-[236px]'>
                            <h1 data-aos="fade-right" data-aos-delay="50"
                                data-of
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="true"
                                data-aos-offset="200" className='lg:text-[48px] text-[25px] font-medium Medium text-[#321C3C]'>Pricing Plans</h1>
                            <p data-aos="fade-left" data-aos-delay="50"
                                data-of
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="true"
                                data-aos-offset="200" className='lg:w-[563px] mx-auto font-normal Normal text-lg mt-[15px] lg:mt-5'>When it comes to choosing the right web hosting provider, we know how easy it is to get overwhelmed with the number.

                            </p>
                        </div>

                        <div data-aos="zoom-in" data-aos-delay="50"
                            data-of
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-offset="200" className='grid lg:px-[80px] xl:px-[225px] lg:mt-[50px] grid-cols-1 gap-[30px] lg:grid-cols-3'>

                            {/* 1 */}

                            <div className="card sm:w-auto w-[280px] lg:mx-0 mx-auto xl:w-[310px]  rounded-[25px] 2xl:w-auto  bg-base-100 Box_shadow text-center bg_stander text-[#272223] ">
                                <h2 className=' text-[20px] uppercase mt-[30px] font-medium Medium'>Basic</h2>
                                <h1 className=' lg:text-[50px] uppercase mt-[23px] font-medium Medium'>$65.99</h1>
                                <p className=' text-[16px] uppercase mt-[24px] pb-[31px] font-bold Bold'>Yearly</p>

                                <hr className='borderBottom mb-[31px]' />


                                <div className='space-y-[17px] pb-[31px]   font-normal Normal text-lg'>
                                    <h2 className='text-lg  font-medium Medium'>Perfect for Individual</h2>
                                    <p>50 GB Cloud Storage</p>
                                    <p>
                                        Automated Server Backup
                                    </p>
                                    <p>24/7 Support</p>
                                    <p>Customer Management</p>

                                </div>

                                <hr className='borderBottom mb-[31px]' />


                                <div className='mt-[30px] w-[188px] mx-auto py-4 px-[44px] ChosePlan'>
                                    <button className=' text-[14px] text-white font-bold Bold'>Choose Plan</button>

                                </div>
                                <h1 className='text-[14px] font-medium Medium text-[#783FBE] underline text-center hover:text-white mt-[21px] mb-[30px]'>Get Your 30 Day Free Trail</h1>




                            </div>

                            {/* 2 */}




                            <div className="card sm:w-auto w-[280px] lg:mx-0 mx-auto xl:w-[310px] bg_stander text-[#272223]  rounded-[25px] 2xl:w-auto  bg-base-100 Box_shadow text-center">
                                <h2 className=' text-[20px] uppercase mt-[30px] font-medium Medium'>Standard</h2>
                                <h1 className=' lg:text-[50px] uppercase mt-[23px] font-medium Medium'>$65.99</h1>
                                <p className=' text-[16px] uppercase mt-[24px] pb-[31px] font-bold Bold'>Yearly</p>

                                <hr className='borderBottom mb-[31px]' />


                                <div className='space-y-[17px] pb-[31px]   font-normal Normal text-lg'>
                                    <h2 className='text-lg font-medium Medium'>Perfect for Individual</h2>
                                    <p>50 GB Cloud Storage</p>
                                    <p>
                                        Automated Server Backup
                                    </p>
                                    <p>24/7 Support</p>
                                    <p>Customer Management</p>

                                </div>

                                <hr className='borderBottom mb-[31px]' />


                                <div className='mt-[30px]  w-[188px mx-auto py-4 px-[44px] ChosePlan'>
                                    <button className='text-[14px] text-white font-bold Bold'>Choose Plan</button>

                                </div>
                                <h1 className='text-[14px] font-medium Medium text-[#783FBE] underline text-center hover:text-white mt-[21px] mb-[30px]'>Get Your 30 Day Free Trail</h1>




                            </div>

                            {/* 3 */}

                            <div className="card sm:w-auto w-[280px] lg:mx-0 mx-auto xl:w-[310px] bg_stander  text-[#272223]  rounded-[25px] 2xl:w-auto   bg-base-100 Box_shadow text-center">
                                <h2 className=' text-[20px] uppercase mt-[30px] font-medium Medium'>Premium</h2>
                                <h1 className=' lg:text-[50px] uppercase mt-[23px] font-medium Medium'>$65.99</h1>
                                <p className=' text-[16px] uppercase mt-[24px] pb-[31px] font-bold Bold'>Yearly</p>

                                <hr className='borderBottom mb-[31px] bg-white' />


                                <div className='space-y-[17px] pb-[31px]   font-normal Normal text-lg'>
                                    <h2 className='text-lg  font-medium Medium'>Perfect for Individual</h2>
                                    <p>50 GB Cloud Storage</p>
                                    <p>
                                        Automated Server Backup
                                    </p>
                                    <p>24/7 Support</p>
                                    <p>Customer Management</p>

                                </div>

                                <hr className='borderBottom mb-[31px]' />




                                <div className='mt-[30px]  w-[188px mx-auto py-4 px-[44px] ChosePlan'>
                                    <button className='text-[14px] text-white font-bold Bold'>Choose Plan</button>

                                </div>
                                <h1 className='text-[14px] font-medium Medium  text-[#783FBE] hover:text-white underline text-center mt-[21px] mb-[30px]'>Get Your 30 Day Free Trail</h1>




                            </div>

                        </div>
                    </div>
                </section>


                <section className='containerWidth mx-auto'>
                    <div data-aos="zoom-in" data-aos-delay="50"
                        data-of
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-offset="200" className='text-center mt-[180px]'>
                        <SectionTitle tittle={'Awarded & Trusted By'} />
                    </div>



                    <Marquee speed={80}>

                        <div className='px-[150px] mb-[150px]  flex gap-[69px] 2xl:justify-center mt-[50px]'>
                            <img src={codeLab} className='w-[171px]' alt="" />
                            <img src={niraState} className='w-[223px]' alt="" />
                            <img src={live} className='w-[113px]' alt="" />
                            <img src={goldLine} className='w-[194px]' alt="" />
                            <img src={circle} className='w-[162px]' alt="" />
                            <img src={codeLab} className='w-[171px]' alt="" />
                            <img src={niraState} className='w-[223px]' alt="" />
                            <img src={live} className='w-[113px]' alt="" />
                            <img src={goldLine} className='w-[194px]' alt="" />
                            <img src={circle} className='w-[162px]' alt="" />


                        </div>
                    </Marquee>


                </section>



                <footer className='bg_Footer xl:h-[850px] 2xl:h-[1100px] '>

                    <div data-aos="fade-up" data-aos-delay="50"

                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-offset="200"

                        className='containerWidth  flex mx-auto justify-center pt-[50px] 2xl:mt-[400px] lg:pt-[286.82px]'>
                        <div className='text-center'>
                            <h1 className='text-white '><SectionTitle tittle={'Get Our Latest Newsletters'} /> </h1>

                            <p className='text-white font-normal Normal text-lg mt-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                            <div className='lg:flex justify-center items-center px-5 lg:px-0 mt-[37px] gap-[15px]'>
                                <div className=''>
                                    <input type="text" className='lg:w-[450px]  w-full h-[63px]   rounded-[8px]  px-5 py-5' placeholder='Type your email' />

                                </div>

                                <div className=' py-[22px] mt-5  lg:mt-0 px-[50px] ChosePlan'>
                                    <button type='submit' className='text-[14px]  text-white font-bold uppercase Bold'>Subscribe</button>

                                </div>

                            </div>
                        </div>
                    </div>


                    <div data-aos="fade-up" data-aos-delay="50"

                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-offset="200"
                        className='containerWidth mx-auto px-5 lg:px-[80px] xl:px-[150px] mt-[50px] lg:mt-[98px] lg:flex 2xl:gap-[300px] lg:gap-[90px] items-center'>

                            {/* 1 */}
                        <div className=''>
                            <h1 className='Bold font-bold lg:text-start text-center text-[25px]  lg:text-[30px] text-[#FFF]'>Xpeed Cloud</h1>
                            <div className='flex justify-center lg:justify-start gap-[105px] lg:gap-5 mt-[30px]'>
                                <img src={tw} className='w-[22.23px]' alt="" />
                                <img src={instra} className='w-[17.663px]' alt="" />
                                <img src={fb} className='w-[8.208px]' alt="" />
                            </div>



                        </div>

                        {/* 2 */}

                        <div className='text-white text-[14px] lg:text-lg  font-normal Normal lg:mt-0 mt-[30px]   lg:flex gap-[25px]'>
                            <p className='  inline'>Privacy Policy</p>
                            <p className='ml-5 lg:ml-0 inline'>
                                Terms and Conditions
                            </p>
                            <p className='lg:text-start text-center mt-4 lg:mt-0'>Affiliate Center</p>
                        </div>

                        {/* 3 */}

                        <div>
                            <h1 className='Medium mt-[30px] lg:mt-0 lg:text-start text-center font-medium text-[20px] lg:text-[30px] text-[#FFF]'>Payment Methods</h1>
                            <div className='flex justify-center lg:justify-start mt-[34px] gap-[38px] lg:gap-5 lg:mt-[6px]'>
                                <img src={bank1} className='w-[58px]' alt="" />
                                <img src={bank2} className='w-[50px]' alt="" />
                                <img src={bank3} className='w-[50px]' alt="" />
                            </div>



                        </div>
                    </div>

                    <div className='containerWidth px-5 xl:px-[150px] mx-auto lg:w-[1440px] 2xl:w-auto'>
                        <hr className='mt-[42px] lg:mt-[53px] mb-[31px]  borderFooter' />

                    </div>
                    <div
                        className=' px-5 mx-auto xl:w-[1440px]   text-white  text-[14px]   lg:text-[16px] font-normal Normal '>
                        <p className=' mx-auto text-center  lg:pb-[20px] pb-[51px] xl:pb-[40px]  flex justify-center'>© Copyright © 2020 Design by Xpeed Page</p>
                    </div>

                </footer>



            </Container>

        </>
    );
};

export default Home;