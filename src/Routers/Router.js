import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from '../Pages/Hero';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import About from '../About';


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
       <Route path="/hero" element={ <Hero />}/>
       <Route path="/login" element={<Login />}/>
       <Route path='/signup'element={<SignUp />}/>
       <Route path='/about' element={<About/>}/>
    </Routes>
  );
}

export default Router;
