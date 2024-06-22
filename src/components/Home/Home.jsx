import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';

const Home = () => {
    return (
        <div>
          {/* <h1 className='text-red-400'>this is home</h1>   */}
          <Banner></Banner>
          <About></About>
          <Services></Services>
        </div>
    );
};

export default Home;