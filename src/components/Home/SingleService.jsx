import React from 'react';

const SingleService = ({ service }) => {
    const { _id ,img,title ,description , price} = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description.slice(0,100)}</p>
                    <h1 className='text-[18px] font-bold'>Price : <span className='text-yellow-600 font-bold'>£ {price}</span></h1>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;