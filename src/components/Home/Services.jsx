import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {
    const [services , setServies] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServies(data))
    },[])

    console.log('service data loaded succesully !')
    console.log(services)
    return (
        <div>
            <div className='m-4 '>
                <div className='text-center'>
                    <h2 className='text-4xl font-bold text-yellow-600 p-3'>Our Services</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ducimus. Placeat exercitationem aspernatur cupiditate culpa officia minus. Tenetur, delectus maxime!</p>
                </div>
                <div className='grid grid-cols-3 max-w-7xl mx-auto py-20'>
                  {
                    services.map(service => <SingleService key={service._id} service={service}></SingleService>)
                  }
                </div>
            </div>
        </div>
    );
};

export default Services;