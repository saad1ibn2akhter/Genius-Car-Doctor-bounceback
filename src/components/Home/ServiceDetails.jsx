import React, { useEffect, useState } from 'react';
import image from '../../assets/service.svg';
import { useLoaderData, useParams } from 'react-router-dom';
import RightSideBar from './RightSideBar';

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
    return (
        <div className='py-8 max-w-7xl mx-auto'>
            <div className='max-w-7xl mx-auto '>
                <div className='flex justify-center max-h-[175px] w-[100%] relative'>
                    <img className='w-5/6  ' src="https://i.ibb.co/ydCbDN3/5555.jpg" alt="" />
                    <div className=' absolute'>
                        <h1 className=' bottom-0 transform translate-y-20 text-white text-[36px] font-medium  ' >Car Servicing Support</h1>
                        {/* <button className='btn btn-secondary bg-orange-500 rounded-t-lg border-t-2 border-red-700'>Home / Service Details</button> */}
                    </div>
                </div>
                <section className=''>
                    <div className='flex justify-between items-center'>

                        {/* Left Sidebar */}
                        <div className='w-2/3'>

                        </div>
                         {/* Right Sidebar */}

                         <div className='w-1/3'>
                        <RightSideBar matchedData={matchedData}></RightSideBar>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ServiceDetails;