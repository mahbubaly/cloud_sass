import React from 'react';
import Container from '../../Shared/Container';
import '../../Shared/Style.css';
import BackUp from '../../assets/Image/backUp.png'
import cloud from '../../assets/Image/cloude.png'
import finance from '../../assets/Image/finance.png'
import EasyPay from '../../assets/Image/easyPay.png'
import img02 from '../../assets/Image/02.png'


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


                    <div className='px-[150px] lg:mt-[50px]'>

                        <div className='grid lg:grid-cols-4 grid-cols-1 lg:gap-4'>
                            <div>

                                <div className="card lg:w-[273px] 2xl:w-auto  bg-base-100 shadow-xl">
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

                                <div className="card lg:w-[273px] 2xl:w-auto  bg-base-100 shadow-xl">
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

                                <div className="card lg:w-[273px] 2xl:w-auto  bg-base-100 shadow-xl">
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

                                <div className="card lg:w-[273px] 2xl:w-auto  bg-base-100 shadow-xl">
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
                            <img src={img02} className='lg:w-[866.064px] lg:-ml-[100px] 2xl:-ml-[130px]' alt="" />
                            
                        </div>
                        <div>

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



            </Container>

        </>
    );
};

export default Home;