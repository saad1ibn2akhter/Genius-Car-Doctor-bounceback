import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData();
    console.log(data, ' data from the checkout page ')

    const { title, _id } = data;

    return (
        <div className='bg-white py-20 text-black'>
            <form className='text-black'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px] bg-white text-black'>
                    <div className="form-control">
                        <label className="label text-black">
                            <span className="label-text text-black">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered bg-white border border-black  " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered bg-white border border-black " required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered bg-white border border-black " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered bg-white border border-black" required />

                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className='btn btn-primary' value="Conform Order" />
                </div>
            </form>
            {/* <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body">

                </form>
            </div> */}

        </div>
    );
};

export default Checkout;