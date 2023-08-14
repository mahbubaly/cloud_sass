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


const Home = () => {
    return (
        <>

            <Container>
                <header className='bg_Banner xl:h-[959.412px]  2xl:h-[1200px]'>
                    <nav className='px-[150px] pt-[35px] flex justify-between items-center'>

                        <div>
                            <h1 className='Bold font-bold lg:text-[30px] text-[#FFF]'>Xpeed Cloud</h1>

                        </div>
                        <div className='flex gap-[30px]'>
                            <h1 className='Normal font-normal text-white text-[16px]'>Solution</h1>
                            <h1 className='Normal font-normal text-white text-[16px]'>Why choose us</h1>
                            <h1 className='Normal font-normal text-white text-[16px]'>Features</h1>
                            <h1 className='Normal font-normal text-white text-[16px]'>Pricing</h1>

                        </div>


                    </nav>
                    <section>
                        <div className='pt-[154px]'>
                            <h1 className='Medium font-medium lg:text-[65px] lg:w-[775px] mx-auto text-center text-[#FFF]'>Everything You Need To Do Better Work</h1>


                            <p className='mt-[25px] text-center Normal mx-auto text-[#fff] text-lg lg:w-[663px]'>
                                Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard.
                            </p>

                            <div className='flex justify-center gap-[25px] mt-[35px]'>
                                <button className='lg:w-[195px] rounded-[8px] Gradient py-5 text-[#fff] text-[16px] Bold'>
                                    Get Started
                                </button>
                                <button className='lg:w-[200px] border-2 border-white rounded-[8px]  py-5 text-[#fff] text-[16px] Bold'>
                                    Watch Trailer
                                </button>
                            </div>

                        </div>
                    </section>




                </header>


                <section>
                    {/* Our Solution */}

                    <div className='mx-auto lg:w-[563px] text-center'>
                        <h1 className='text-[#321C3C] lg:text-[48px] Normal'>Our Solution</h1>
                        <p className='text-[#413F42] text-lg Light font-light mt-5 '>When it comes to choosing the right web hosting provider, we know how easy it is to get overwhelmed with the number.

                        </p>



                    </div>


                    <div className='mx-[150px] lg:mt-[50px]'>

                        <div className='grid lg:grid-cols-4 grid-cols-1 lg:gap-4'>
                            <div>

                                <div className="card lg:w-[273px] 2xl:w-auto  bg-base-100 Box_shadow">
                                    <div className='pt-[50px] px-[86px]'>
                                        <img src={BackUp} className='w-[100px] h-[100px] mx-auto  ' alt="BackUp" />


                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-[#27162E] text-[20px] Medium px-[44px] mt-[30px]">Automated Backup</h2>
                                        <p className='text-lg font-normal Normal mx-5 pb-[50px] mt-4'>About 64% of all on-line teens say that do things online that they.</p>

                                    </div>
                                </div>

                            </div>

                            {/* 2 */}
                            <div>

                                <div className="card lg:w-[273px] 2xl:w-auto  bg-base-100 Box_shadow">
                                    <div className='pt-[50px] px-[86px]'>
                                        <img src={cloud} className='w-[100px] h-[100px]  mx-auto' alt="BackUp" />


                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-[#27162E] text-[20px] Medium px-[44px] mt-[30px]">Cloud Storage</h2>
                                        <p className='text-lg font-normal Normal mx-5 pb-[50px] mt-4'>About 64% of all on-line teens say that do things online that they.</p>

                                    </div>
                                </div>

                            </div>

                            {/* 3 */}
                            <div>

                                <div className="card lg:w-[273px] 2xl:w-auto  bg-base-100 Box_shadow">
                                    <div className='pt-[50px] px-[86px]'>
                                        <img src={finance} className='w-[100px] h-[100px] mx-auto  ' alt="BackUp" />


                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-[#27162E] text-[20px] Medium px-[44px] mt-[30px]">Finance Assistant</h2>
                                        <p className='text-lg font-normal Normal mx-5 pb-[50px] mt-4'>About 64% of all on-line teens say that do things online that they.</p>

                                    </div>
                                </div>

                            </div>

                            {/* 4 */}
                            <div>

                                <div className="card lg:w-[273px] 2xl:w-auto  bg-base-100 Box_shadow">
                                    <div className='pt-[50px] px-[86px]'>
                                        <img src={EasyPay} className='w-[100px] h-[100px] mx-auto ' alt="BackUp" />


                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-[#27162E] text-[20px] Medium px-[44px] mt-[30px]">Easy Payment</h2>
                                        <p className='text-lg font-normal Normal mx-5 pb-[50px] mt-4'>About 64% of all on-line teens say that do things online that they.</p>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>


                {/* Why Choose Us */}

                <section>
                    <div className='mx-auto lg:w-[563px] text-center lg:mt-[180px]'>
                        <h1 className='text-[#321C3C] lg:text-[48px] Normal'>Why Choose Us</h1>
                        <p className='text-[#413F42] text-lg Light font-light mt-5 '>When it comes to choosing the right web hosting provider, we know how easy it is to get overwhelmed with the number.

                        </p>



                    </div>



                    <div className='mt-[50px] grid grid-cols-1 items-center lg:mb-[189px] lg:grid-cols-2 gap-[61px] lg:pr-[150px]'>

                        <div>
                            <img src={img02} className='lg:w-[676px] lg:-ml-[60px] 2xl:-ml-[50px]' alt="" />

                        </div>
                        <div className='2xl:w-auto lg:w-[498px]'>

                            <div className='flex gap-[25px] items-start'>
                                <h1 className='lg:text-[40px] font-semibold text-[#272223] SansPro -mt-2'>01</h1>
                                <div>
                                    <h2 className='text-primary text-[20px] font-medium Medium '>Best Performance</h2>
                                    <p className='text-lg Light font-light mt-[10px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                </div>
                            </div>
                            <div className='flex gap-[25px] items-start my-[33px]'>
                                <h1 className='lg:text-[40px] font-semibold text-[#272223] SansPro -mt-2'>02</h1>
                                <div>
                                    <h2 className='text-primary text-[20px] font-medium Medium '>High Speed Servers</h2>
                                    <p className='text-lg Light font-light mt-[10px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                </div>
                            </div>
                            <div className='flex gap-[25px] items-start'>
                                <h1 className='lg:text-[40px] font-semibold text-[#272223] SansPro -mt-2'>03</h1>
                                <div>
                                    <h2 className='text-primary text-[20px] font-medium Medium '>24/7 Support</h2>
                                    <p className='text-lg Light font-light mt-[10px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>



                {/* How We Help Our Clients Measure Social */}

                <section>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-[20px]'>
                        <div className='lg:pl-[150px]'>
                            <SectionTitle tittle={"How We Help Our Clients Measure Social"} />

                            <p className='text-lg Normal font-normal text-[#413F42] lg:mt-[25px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>

                            <h2 className='lg:mt-[30px] Medium font-medium text-[20px] text-[#321C3C]'>Customized registration</h2>
                            <p className='text-lg font-normal Normal mt-[10px] lg:w-[383px] '>It is a long established fact that a reader will be distracted by the readable.</p>


                            <h2 className='lg:mt-[30px] Medium font-medium text-[20px] text-[#321C3C]'>Fast and simple Setup</h2>
                            <p className='text-lg font-normal Normal mt-[10px] lg:w-[383px] '>It is a long established fact that a reader will be distracted by the readable.</p>







                        </div>

                        <div>
                            <img src={animationBG} className='lg:pr-[30px] lg:w-[676px] 2xl:w-auto' alt="" />
                        </div>
                    </div>




                </section>


                {/* Making A New Trend In Poster Printing */}

                <section>
                    <div className='lg:px-[30px] lg:mt-[184px] grid lg:grid-cols-2 grid-cols-1 gap-[50px]'>

                        <div>
                            <img src={Nst04} className='lg:w-[646.025px]' alt="" />

                        </div>
                        <div className='lg:pr-[150px]'>
                            <SectionTitle tittle={'Making A New Trend In Poster Printing'} />

                            <p className='text-lg text-justify mt-[25px] text-[#413F42] font-normal Normal'>
                                Chances are unless you are very lucky you will go thru many different relationships before you find your special someone. Finding your sole mate is like gambling. <br /> <br />

                                During your life you will probably meet some people who seem like they may be the one, or that they are close, but still have the feeling that something else is missing. My advice is that if you are not happy, because something seems like it is missing, then it usually is not right the bus one day without ever knowing it.</p>

                        </div>

                    </div>
                </section>


                {/* Let’s Hear Our Happy Customer */}


                <div>
                    <div>
                        <h1 className='flex justify-center lg:mt-[182px] text-[#272223]'> <SectionTitle tittle={'Let’s Hear Our Happy Customer'} /></h1>

                        <p className='mx-auto text-center mt-[20px] lg:w-[563px] text-lg font-normal Normal'>
                            When it comes to choosing the right web hosting provider, we know how easy it is to get overwhelmed with the number.
                        </p>



                    </div>




                    <div className='px-[205px] lg:mt-[50px] grid lg:grid-cols-3 grid-cols-1 lg:gap-[50px]'>


                        <div className="card lg:w-[310px] 2xl:w-auto  bg-base-100 Box_shadow">
                            <div className='mt-[50px]  ml-[30px]'>
                                <img src={quote} className='w-[46px] h-[36px] top-[50px] absolute  ' alt="BackUp" />


                            </div>
                            <div className="relative">

                                <p className='ml-[40px] mr-[30px] text-lg font-normal Normal   mt-4 text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more..</p>

                            </div>

                            <div className=' pl-[40px] mt-[19px] flex gap-2'>
                                <img src={star} className='w-[12px] h-[11px]' alt="" />
                                <img src={star} className='w-[12px] h-[11px]' alt="" />
                                <img src={star} className='w-[12px] h-[11px]' alt="" />
                                <img src={star} className='w-[12px] h-[11px]' alt="" />
                                <img src={star} className='w-[12px] h-[11px]' alt="" />

                            </div>

                            <div className='ml-[40px] mr-[19px] mt-[33px] mb-[50px] flex lg:gap-[15px] 2xl:gap-[30px]'>
                                <img src={oval} className='w-[50px] h-[50px]' alt="" />
                                <div>
                                    <h1 className='text-lg font-semibold SemiBold'>
                                        Tufayel Ahmed Nayef
                                    </h1>
                                    <p className='text-[14px] font-normal Normal text-[#272223]'>Visual Designer</p>
                                </div>
                            </div>
                        </div>



                        {/* 2 */}
                        <div className="card lg:mt-[50px] lg:w-[310px]  2xl:w-auto  bg-base-100 Box_shadow">
                            <div className='mt-[50px]  ml-[30px]'>
                                <img src={quote} className='w-[46px] h-[36px] top-[50px] absolute  ' alt="BackUp" />


                            </div>
                            <div className="relative">

                                <p className='ml-[40px] mr-[30px] text-lg font-normal Normal   mt-4 text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more..</p>

                            </div>

                            <div className=' pl-[40px] mt-[19px] flex gap-2'>
                                <img src={star} className='w-[12px] h-[11px]' alt="" />
                                <img src={star} className='w-[12px] h-[11px]' alt="" />
                                <img src={star} className='w-[12px] h-[11px]' alt="" />
                                <img src={star} className='w-[12px] h-[11px]' alt="" />
                                <img src={star} className='w-[12px] h-[11px]' alt="" />

                            </div>

                            <div className='ml-[40px] mr-[19px] mt-[33px] mb-[50px] flex lg:gap-[15px] 2xl:gap-[30px]'>
                                <img src={oval2} className='w-[50px] h-[50px]' alt="" />
                                <div>
                                    <h1 className='text-lg font-semibold SemiBold'>
                                        Tufayel Ahmed Nayef
                                    </h1>
                                    <p className='text-[14px] font-normal Normal text-[#272223]'>Visual Designer</p>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="card lg:w-[310px] 2xl:w-auto  bg-base-100 Box_shadow">
                            <div className='mt-[50px]  ml-[30px]'>
                                <img src={quote} className='w-[46px] h-[36px] top-[50px] absolute  ' alt="BackUp" />


                            </div>
                            <div className="relative">

                                <p className='ml-[40px] mr-[30px] text-lg font-normal Normal   mt-4 text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more..</p>

                            </div>

                            <div className=' pl-[40px] mt-[19px] flex gap-2'>
                                <img src={star} className='w-[12px] h-[11px]' alt="" />
                                <img src={star} className='w-[12px] h-[11px]' alt="" />
                                <img src={star} className='w-[12px] h-[11px]' alt="" />
                                <img src={star} className='w-[12px] h-[11px]' alt="" />
                                <img src={star} className='w-[12px] h-[11px]' alt="" />

                            </div>

                            <div className='ml-[40px] mr-[19px] mt-[33px] mb-[50px] flex lg:gap-[15px] 2xl:gap-[30px]'>
                                <img src={oval3} className='w-[50px] h-[50px]' alt="" />
                                <div>
                                    <h1 className='text-lg font-semibold SemiBold'>
                                        Tufayel Ahmed Nayef
                                    </h1>
                                    <p className='text-[14px] font-normal Normal text-[#272223]'>Visual Designer</p>
                                </div>
                            </div>
                        </div>

                        {/* 4 */}

                    </div>


                </div>

                {/* Pricing Plans */}
                <section>

                    <div>
                        <div className='text-center lg:mt-[236px]'>
                            <h1 className='lg:text-[48px] font-medium Medium text-[#321C3C]'>Pricing Plans</h1>
                            <p className='lg:w-[563px] mx-auto font-normal Normal text-lg mt-5'>When it comes to choosing the right web hosting provider, we know how easy it is to get overwhelmed with the number.

                            </p>
                        </div>

                        <div className='grid lg:mx-[225px] lg:mt-[50px] grid-cols-1 gap-[30px] lg:grid-cols-3'>
                            {/* 1 */}
                            <div className="card lg:w-[310px]  rounded-[25px] 2xl:w-auto  bg-base-100 Box_shadow text-center">
                                <h2 className='text-[#272223] text-[20px] uppercase mt-[30px] font-medium Medium'>Basic</h2>
                                <h1 className='text-[#272223] lg:text-[50px] uppercase mt-[23px] font-medium Medium'>$65.99</h1>
                                <p className='text-[#272223] text-[16px] uppercase mt-[24px] pb-[31px] borderBottom mb-14 font-bold Bold'>Yearly</p>

                                <div className='space-y-[17px] pb-[31px] borderBottom text-[#272223] font-normal Normal text-lg'>
                                    <h2 className='text-lg text-[#272223] font-medium Medium'>Perfect for Individual</h2>
                                    <p>50 GB Cloud Storage</p>
                                    <p>
                                        Automated Server Backup
                                    </p>
                                    <p>24/7 Support</p>
                                    <p>Customer Management</p>

                                </div>

                                <div className='mt-[30px] w-full lg:w-[180px] mx-auto py-4 px-[44px] ChosePlan'>
                                    <button className='text-[14px] text-white font-bold Bold'>Choose Plan</button>

                                </div>
                                <h1 className='text-[14px] font-medium Medium text-[#783FBE] underline text-center mt-[21px] mb-[30px]'>Get Your 30 Day Free Trail</h1>




                            </div>

                            {/* 2 */}
                            <div className="card lg:w-[310px] bg_stander text-[#FFF] rounded-[25px] 2xl:w-auto  bg-base-100 Box_shadow text-center">
                                <h2 className=' text-[20px] uppercase mt-[30px] font-medium Medium'>Standard</h2>
                                <h1 className=' lg:text-[50px] uppercase mt-[23px] font-medium Medium'>$65.99</h1>
                                <p className=' text-[16px] uppercase mt-[24px] pb-[31px] borderBottom mb-14 font-bold Bold'>Yearly</p>

                                <div className='space-y-[17px] pb-[31px] borderBottom  font-normal Normal text-lg'>
                                    <h2 className='text-lg  font-medium Medium'>Perfect for Individual</h2>
                                    <p>50 GB Cloud Storage</p>
                                    <p>
                                        Automated Server Backup
                                    </p>
                                    <p>24/7 Support</p>
                                    <p>Customer Management</p>

                                </div>

                                <div className='mt-[30px] w-full lg:w-[180px] mx-auto py-4 px-[44px] ChosePlan'>
                                    <button className='text-[14px] text-white font-bold Bold'>Choose Plan</button>

                                </div>
                                <h1 className='text-[14px] font-medium Medium  underline text-center mt-[21px] mb-[30px]'>Get Your 30 Day Free Trail</h1>




                            </div>
                            <div className="card lg:w-[310px]   rounded-[25px] 2xl:w-auto   bg-base-100 Box_shadow text-center">
                                <h2 className='text-[#272223] text-[20px] uppercase mt-[30px] font-medium Medium'>Premium</h2>
                                <h1 className='text-[#272223] lg:text-[50px] uppercase mt-[23px] font-medium Medium'>$65.99</h1>
                                <p className='text-[#272223] text-[16px] uppercase mt-[24px] pb-[31px] borderBottom mb-14 font-bold Bold'>Yearly</p>

                                <div className='space-y-[17px] pb-[31px] borderBottom text-[#272223] font-normal Normal text-lg'>
                                    <h2 className='text-lg text-[#272223] font-medium Medium'>Perfect for Individual</h2>
                                    <p>50 GB Cloud Storage</p>
                                    <p>
                                        Automated Server Backup
                                    </p>
                                    <p>24/7 Support</p>
                                    <p>Customer Management</p>

                                </div>

                                <div className='mt-[30px] w-full lg:w-[180px] mx-auto py-4 px-[44px] ChosePlan'>
                                    <button className='text-[14px] text-white font-bold Bold'>Choose Plan</button>

                                </div>
                                <h1 className='text-[14px] font-medium Medium text-[#783FBE] underline text-center mt-[21px] mb-[30px]'>Get Your 30 Day Free Trail</h1>




                            </div>

                        </div>
                    </div>
                </section>


                <section>
                    <div className='text-center mt-[180px]'>
                        <SectionTitle tittle={'Awarded & Trusted By'} />
                    </div>

                    <div className='px-[150px] mb-[150px]  lg:flex gap-[69px] 2xl:justify-center mt-[50px]'>
                        <img src={codeLab} className='w-[171px]' alt="" />
                        <img src={niraState} className='w-[223px]' alt="" />
                        <img src={live} className='w-[113px]' alt="" />
                        <img src={goldLine} className='w-[194px]' alt="" />
                        <img src={circle} className='w-[162px]' alt="" />

                    </div>
                </section>



                <footer className='bg_Footer lg:h-[817.32px] 2xl:h-[1100px] '>

                    <div className='flex mx-auto justify-center pt-[286.82px]'>
                        <div className='text-center'>
                            <h1 className='text-white '><SectionTitle tittle={'Get Our Latest Newsletters'} /> </h1>
                            <p className='text-white font-normal Normal text-lg mt-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                            <div className='flex justify-center items-center mt-[37px] gap-[15px]'>
                                <div className=''>
                                    <input type="text" className='lg:w-[450px] rounded-[8px]  px-5 py-5' placeholder='Type your email' />

                                </div>

                                <div className=' py-[22px] px-[50px] ChosePlan'>
                                    <button type='submit' className='text-[14px] text-white font-bold uppercase Bold'>Subscribe</button>

                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='lg:px-[150px] mt-[98px] flex 2xl:gap-[300px] lg:gap-[90px] items-center'>
                        <div>
                            <h1 className='Bold font-bold lg:text-[30px] text-[#FFF]'>Xpeed Cloud</h1>
                            <div className='flex gap-5 mt-[30px]'>
                                <img src={tw} className='w-[22.23px]' alt="" />
                                <img src={instra} className='w-[17.663px]' alt="" />
                                <img src={fb} className='w-[8.208px]' alt="" />
                            </div>



                        </div>
                        <div className='text-white text-lg font-normal Normal  flex gap-[25px]'>
                            <p>Privacy Policy</p>
                            <p>
                                Terms and Conditions
                            </p>
                            <p>Affiliate Center</p>
                        </div>

                        <div>
                            <h1 className='Medium font-medium text-[20px] lg:text-[30px] text-[#FFF]'>Payment Methods</h1>
                            <div className='flex gap-5 mt-[6px]'>
                                <img src={bank1} className='w-[58px]' alt="" />
                                <img src={bank2} className='w-[50px]' alt="" />
                                <img src={bank3} className='w-[50px]' alt="" />
                            </div>



                        </div>
                    </div>

                    <div className='text-white mt-[89px] text-center 2xl:mr-40 lg:mr-24 text-[16px] font-normal Normal mb-[40px]'>
                        <p>© Copyright © 2020 Design by Xpeed Page</p>
                    </div>

                </footer>



            </Container>

        </>
    );
};

export default Home;