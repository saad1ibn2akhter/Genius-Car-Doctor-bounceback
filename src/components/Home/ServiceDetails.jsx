import React, { useEffect, useState } from 'react';
import image from '../../assets/service.svg';
import { useLoaderData, useParams } from 'react-router-dom';
import RightSideBar from './RightSideBar';
import LeftSideBar from './LeftSideBar';

const useServiceData = (id) => {
    const [data, setData] = useState([]);
    const [matchedData, setMatchedData] = useState(null);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/saad1ibn2akhter/trash-json-bounceback/main/bounce')
            .then(res => res.json())
            .then(data => {
                setData(data);
                const foundData = data.find(d => d.id = id);
                setMatchedData(foundData);
            });
    }, [id]);

    return matchedData;
};

const ServiceDetails = () => {
    // const { id } = useParams();
    // const matchedData = useServiceData(id);
    // const [requiredData] = useLoaderData();
    // console.log(requiredData);

    const [data, setData] = useState([]);

    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/saad1ibn2akhter/trash-json-bounceback/main/bounce')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    console.log(data);

    const matchedData = data.find(d => d._id === id);
    console.log(matchedData);
    // const {title} = matchedData;
    const  handleSubmit = (e) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const price = form.get('price');
        const date = form.get('date');

        console.log(name,date,price,email);

        const order = {
            customerName : name,
            email,
            date,
            // service : title,
            service_id : id,
            price : price
        }
        console.log(order);

        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body : JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('a new data added to the database , congratulations !')
            }
        })
    }
    return (
        <div>
            <div className='my-20'>
                <form className='text-black' onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px] bg-white text-black'>
                        <div className="form-control">
                            <label className="label text-black">
                                <span className="label-text text-black">Name</span>
                            </label>
                            <input type="text" placeholder="Name " name='name' className="input input-bordered bg-white border border-black  " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Date</span>
                            </label>
                            <input type="date" placeholder="" name='date' className="input input-bordered bg-white border border-black "  />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered bg-white border border-black " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Price</span>
                            </label>
                            <input type="number" placeholder="Price" name='price' className="input input-bordered bg-white border border-black" required />

                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className='btn btn-primary' value="Conform Order" />
                    </div>
                </form>
            </div>
            <div className='py-8 max-w-7xl mx-auto'>
                <div className='max-w-7xl mx-auto '>
                    <div className='flex justify-center max-h-[175px] w-[100%] relative p-3 mb-16 rounded-3xl'>
                        <img className='w-full  ' src="https://i.ibb.co/ydCbDN3/5555.jpg" alt="" />
                        <div className=' absolute'>
                            <h1 className=' bottom-0 transform translate-y-20 text-white text-[36px] font-medium  ' >Car Servicing Support</h1>
                            {/* <button className='btn btn-secondary bg-orange-500 rounded-t-lg border-t-2 border-red-700'>Home / Service Details</button> */}
                        </div>
                    </div>
                    <section className=''>
                        <div className='flex justify-between items-start space-x-10'>

                            {/* Left Sidebar */}
                            <div className='w-2/3'>
                                <LeftSideBar ></LeftSideBar>
                            </div>
                            {/* Right Sidebar */}

                            <div className='w-1/3'>
                                <RightSideBar matchedData={matchedData}></RightSideBar>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;