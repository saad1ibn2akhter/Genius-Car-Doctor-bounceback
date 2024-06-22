import React from 'react';
import photo from '../../assets/images/about_us/person.jpg'; 
import parts from '../../assets/images/about_us/parts.jpg'; 

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col relative lg:flex-row">
                    <div className='relative w-1/2'>
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl w-3/4" />
                    <img src={parts} className="max-w-sm rounded-lg shadow-2xl w-1/2 absolute bottom-0 top-1/2 left-1/4 border-8 border-white" />
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <h2 className='text-orange-500 font-bold text-2xl p-5'>About Us </h2>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;