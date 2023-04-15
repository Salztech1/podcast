import React from 'react';
import logo from '../../src/Images/Salz Logo.jpg'

const End = () => {
  return (
    <div>
      <div className='bg-darkblue   text-white d-md-flex d-block col-md-12 col-12'>

<div className='container-fluid col-md-3 col-12 my-md-5 '>
  <img src={logo} alt='' className='img-fluid logo2' />
  <p className='my-md-3'>Proffesional podcast you should discover and grow yourself</p>
</div>

<div className='col-md-3 col-12 fonts'>
  <h2 className='para my-5'> <b> Platform </b></h2>
  <div className='my-3'><p>Features</p>
    <p>Private Podcasts</p>
    <p>Network Hosting </p>
    <p>Pricing</p>
    <p>Help & Support</p>
    <p>Feedback & Suggestions</p>
    <p>Service Status</p> </div>
</div>

<div className='col-md-3 col-12'>
  <h2 className='para my-5'><b>Service</b></h2>
  <p className='my-3'> Podcast Production</p>
  <p> Podcast Studio Hire</p>
  <p> For Agencies</p>
  <p> Request a Quote</p>
</div>

<div className='col-md-3 col-12'>
  <h2 className='para my-5'><b> Resources</b></h2>
  <p className='my-3'> How To Start A Podcast</p>
  <p> Our Blog </p>
  <p> Our Podcasts </p>
  <p> Free Music </p>
  <p> MatchMaker.fm </p>
</div>

</div>
    </div>
  );
}

export default End;
