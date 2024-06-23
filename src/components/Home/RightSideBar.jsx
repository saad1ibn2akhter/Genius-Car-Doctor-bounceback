import React from 'react';
import { FaArrowAltCircleRight, FaArrowRight, FaFilePdf } from 'react-icons/fa';
import logo from '../../assets/logo.svg';

const RightSideBar = ({ matchedData }) => {
    console.log('from the sidebar , sending the data', matchedData);
    // const {price} = matchedData;
    return (
        <div className='bg-white'>
            <div className='p-10 bg-gray-200 mb-6'>
                <div className='text-[24px]'>
                    <h1>Services</h1>
                </div>
                <div className='flex justify-between items-center p-4 rounded-xl border-2 border-black mb-3'>
                    <h1>Full Car Repair</h1>
                    <FaArrowAltCircleRight></FaArrowAltCircleRight>
                </div>
                <div className='flex justify-between items-center p-4 rounded-xl border-2 border-black mb-3'>
                    <h1>Full Car Repair</h1>
                    <FaArrowAltCircleRight></FaArrowAltCircleRight>
                </div>
                <div className='flex justify-between items-center p-4 rounded-xl border-2 border-black mb-3'>
                    <h1>Full Car Repair</h1>
                    <FaArrowAltCircleRight></FaArrowAltCircleRight>
                </div>
                <div className='flex justify-between items-center p-4 rounded-xl border-2 border-black mb-3'>
                    <h1>Full Car Repair</h1>
                    <FaArrowAltCircleRight></FaArrowAltCircleRight>
                </div>
                <div className='flex justify-between items-center p-4 rounded-xl border-2 border-black mb-3'>
                    <h1>Full Car Repair</h1>
                    <FaArrowAltCircleRight></FaArrowAltCircleRight>
                </div>
                <div className='flex justify-between items-center p-4 rounded-xl border-2 border-black mb-3'>
                    <h1>Full Car Repair</h1>
                    <FaArrowAltCircleRight></FaArrowAltCircleRight>
                </div>
            </div>
            <div className='bg-black text-white p-10 rounded-2xl'>
                <h1 className='text-[18px] font-bold pb-3'>Download</h1>
                <div className='flex space-x-7 items-center justify-between'>
                    <div className='flex space-x-10 items-center justify-between'>
                        <div><FaFilePdf className='w-[35px] h-[35px]'></FaFilePdf></div>
                        <div>
                            <h1 className='font-medium'>Our Brouncher</h1>
                            <p className='text-gray-400'>Download</p>
                        </div>
                    </div>
                    <div className='bg-orange-500 p-4 rounded-2xl'>
                        <FaArrowRight></FaArrowRight>
                    </div>
                </div>

                <div className='flex space-x-7 items-center justify-between py-5'>
                    <div className='flex space-x-10 items-center justify-between'>
                        <div><FaFilePdf className='w-[35px] h-[35px]'></FaFilePdf></div>
                        <div>
                            <h1 className='font-medium'>Company Details</h1>
                            <p className='text-gray-400'>Download</p>
                        </div>
                    </div>
                    <div className='bg-orange-500 p-4 rounded-2xl'>
                        <FaArrowRight></FaArrowRight>
                    </div>
                </div>
            </div>
            <div className='text-white bg-black my-3 px-6 py-10 rounded-2xl'>
                <div className='flex justify-center items-center'>
                    <div>
                       <div> <img src={logo} alt="" /></div>

                      <div>
                      <h1 className='text-center p-3'>Need Help ?We Are Here <br />to Help You</h1>
                      <div className='bg-white rounded-2xl w-full p-6 text-black'>
                        <h1><span className='text-orange-600 font-medium'>Car Doctor</span> Special</h1>
                        <p className='capitalize '>get up to <span className='text-[18px] font-medium'>60 %</span> off</p>
                        <button className='btn btn-primary bg-orange-500 transform translate-y-10 translate-x-5 border-0 text-white'>Get A Quote</button>
                      </div> 
                      </div>
                    </div>

                </div>
            </div>
            <div className='text-center '>
                {/* <h1 className='text-[24px] font-bold'>Price £ {price }</h1> */}
                <button className='btn btn-secondary bg-orange-600 text-white w-full'>Proceed Checkout</button>
            </div>
        </div>
    );
};

export default RightSideBar;