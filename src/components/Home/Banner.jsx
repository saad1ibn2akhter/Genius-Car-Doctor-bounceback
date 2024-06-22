import React from 'react';
import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">

                <div id="slide1" className="carousel-item relative  w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex items-center  left-0 top-0 bg-gradient-to-r from-black to-[rgba(21,21,21,0)] right-5 bottom-0 space-x-4">
                        <div className='text-white space-y-7 w-1/3 p-4'>
                            <h2 className='text-4xl font-bold capitalize'>Affordable price for car servicing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed velit ea fuga, asperiores doloribus perferendis repudiandae consequuntur eveniet modi.</p>
                            <div className='flex space-x-4'>
                            <button className='btn btn-primary'>Check Pricing</button>
                            <button className='btn btn-success'>Subscribe</button>
                        </div>
                        </div>
                        
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-4">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-red-600 border-0">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-4">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-red-600 border-0">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-4">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-red-600 border-0">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-4">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-red-600 border-0">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;