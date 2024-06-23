// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const LeftSideBar = () => {
//     const {id} = useParams();
//     console.log('id ===> ' ,id);

//     const [data ,setData] = useState([]);

//     useEffect(() => {
//         fetch(`https://raw.githubusercontent.com/saad1ibn2akhter/trash-json-bounceback/main/bounce_two/${id}`)
//             .then(res => res.json())
//             .then(data => setData(data))
//     }, [])

//     const requiredData = data.find(dsf => dsf._id === id);
//     console.log('required data format :' , requiredData);
//     console.log('all data : ',data);

//     const { img} = requiredData;

//     return (
//         <div className='bg-white'>
//             <img src={img} alt="" />
//         </div>
//     );
// };

// export default LeftSideBar;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import team from '../../assets/images/team/3.jpg'
import { FaYoutube } from 'react-icons/fa';

const LeftSideBar = () => {
    const { id } = useParams();
    console.log('id ===>', id);

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/saad1ibn2akhter/trash-json-bounceback/main/bounce_two`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok ' + res.statusText);
                }
                return res.json();
            })
            .then(data => setData(data))
            .catch(error => setError(error.toString()));
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    const requiredData = data.find(dsf => dsf._id === id);
    console.log('required data format :', requiredData);
    console.log('all data :', data);

    if (!requiredData) {
        return <div>No data found</div>;
    }

    const { img, title, description, facility } = requiredData;

    return (
        <div className='bg-white rounded-3xl'>
            <div>
                {img ? <img className='w-full max-h-[350px]' src={img} alt="Image" /> : <div>No image available</div>}
            </div>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>

                <div className='grid grid-cols-2'>
                    {facility && facility.map((element, index) => (
                        <div key={index} className='rounded-2xl border-t-4 border-red-300 bg-gray-200 gap-[24px] p-10 m-3'>
                            <h1>{element.name}</h1>
                            <h1>{element.details}</h1>
                        </div>
                    ))}
                </div>
                <p>{description}</p>

                <div>
                    <h1>3 Simple Steps to Pay</h1>
                    <p>{description}</p>
                    <div className='flex items-center p-3'>
                        <div className='border p-4'>
                            <div className='roudned-full bg-red-500 border-5 border-red-700'><h1 className='rounded-full bg-orange-600 p-3 text-white'>01</h1></div>
                            <h1>Step 1</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className='border p-4'>
                            <h1 className='rounded-full bg-orange-600 p-3 text-white'>01</h1>
                            <h1>Step 1</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className='border p-4'>
                            <h1 className='rounded-full bg-orange-600 p-3 text-white'>01</h1>
                            <h1>Step 1</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute inset-0 bg-black bg-opacity-50 bg-blend-overlay'></div>
                    <img src={team} className='max-h-[350px] w-full' alt="Team" />
                    <FaYoutube className='absolute top-1/2 bottom-0-1/2 right-1/2 w-[75px] h-[75px] bg-transparent text-blue-500'></FaYoutube>
                </div>

            </div>
        </div>
    );
};

export default LeftSideBar;
