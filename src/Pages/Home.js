import React from 'react';
import logo from '../../src/Images/Salz Logo.jpg'
import image from '../../src/Images/jay shetty-image.jpg';
import image2 from '../../src/Images/rebecca-e1498234731154.jpg'
import image3 from '../../src/Images/Ray Dalio-image.jpg';
import image4 from '../../src/Images/alicia-keys.jpg';
import image5 from '../../src/Images/kobe-bryant.jpg';
import image6 from '../../src/Images/Precious.jpg';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className=" container-fluid   sbg">
    <div className="text-center" >
        <img src={logo} alt="" className="img-fluid logo slogo " />
        <h5 className="font"> <b>Salz Podcast</b></h5>
        <h1 className=" font2 "><b>Millions of shows.</b></h1>
        <h1 className=" font2 "><b>Different types of Podcast to listen.</b></h1>
    </div>

    <div className="col-md-12 col-12  d-md-flex py-md-3">
        <div className="zoom smargin col-md-2   ">
            <img src={image} alt=" " className="img-fluid image2" />
            <h2 className="h2 stext">Jay shetty</h2>
        </div>
        <div className="zoom smargin col-md-2 my-md-0 my-5  ">
            <img src={image2} alt="" className="img-fluid image2 " />
            <h2 className="h2 stext"> Rebecca Enonchong</h2>
        </div>
        <div className="zoom smargin col-md-2   ">
            <img src={image3} alt="" className="img-fluid image2" />
            <h2 className="h2 stext">Ray Dalio</h2>
        </div>
        <div className="zoom smargin col-md-2 my-md-0 my-5   ">
            <img src={image4} alt="" className="img-fluid image2" />
            <h2 className="h2 stext">Alicia Keys</h2>
        </div>
        <div className="zoom smargin col-md-2 p ">
            <img src={image5} alt="" className="img-fluid image2" />
            <h2 className="h2 stext">kobe Bryant</h2>
        </div>
        <div className="zoom col-md-2 my-md-0 my-5 ">
            <img src={image6} alt="" className="img-fluid image2" />
            <h2 className="h2 stext">Precious Natang</h2>
        </div>
    </div>
    <h1 className=" py-md-4 py-4 text-center font2">Now we're talking.</h1>
    <div>
        <button className="btn border  px-md-4  py-md-2 py-3 visit button sbutton " onClick={() => {
            navigate("/Hero")
        }}><b> Explore Features</b></button>
    </div>
</div>
  );
}

export default Home;
