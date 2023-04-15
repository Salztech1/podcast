import React from 'react';
import vid from '../../my-project/src/Vid/lv_0_20230402134428_1.mp4';
import Podcast from './Pages/Podcast';
import Navbar from '../../my-project/src/Components/Navbar';
import End from '../../my-project/src/Components/End';


const About = () => {
    return (
        <div className='background-about'>
            <Navbar />
            <div className='overlay'></div>
            <div className='vid1'>
                <video src={vid} className='vid ' autoPlay loop muted playsInline />
            </div>
            <div className='content'>

                <div className='border1'>
                    <h2 className='fontsize mx-3'>Helping individuals,<br /> brands & businesses get more <br />out of podcasting.</h2>
                    <p className='mx-3 fonts'>Through our podcast, we expose different podcasters to users as well as sites that can teach  individuals<br /> interested in starting their own podcast.</p>
                </div>
            </div>
            <div className=' white whites '>
                <Podcast className='height' />
            </div>


            <div className=''>
                <End />
            </div>

        </div>

    );
}

export default About;
