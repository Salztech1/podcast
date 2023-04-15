import React from 'react';
import './login.css'
import logo from '../../src/Images/Salz Logo.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'


function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login(e) {
        e.preventDefault();

    let url = 'http://localhost:8000/api/v1/users/login';

    
        let body = {
            email: email,
            password: password,
        }

        // axios call
        axios.post(url, body).then(response => {
            // console.log(response)
        
                navigate('/')
            
        }).catch(error => {
            console.log(error)
        });
    }

    //     let data = {
    //         mode: 'no-cors',
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json; charset=UTF-8',
    //                 'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(body)
    // }
    // console.log('body', body)
    // console.log('data', data)

    // fetch(url, body).then(response => {
    //             console.log('response: ', response)
    //             console.log('redirecting')
    //                  navigate('/')

    //         }).catch(error => {
    //             console.log('error: ', error)

    //         });


    // async function login(e) {
    //     e.preventDefault();

    //     try {
    //         await axios.post("http://localhost:8000/login", {
    //             email, password


    //         })
    //             .then(res => {
    //                 if (res.data==="exist") {
    //                     navigate("/hero")
    //                 }
    //                 else if(res.data==="notexist") {
    //                     alert("User have not sign up")
    //                 }
    //             })
    //             .catch(e=>{
    //                 alert("wrong details")
    //                 console.log(e);
    //             })
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }

          


    // }
    return (
        <div className='container-wrapper container2  ' >
            <div className=' background background2 text-white my-5 '>
                <img src={logo} alt='' className='logo2 my-3 mx-2' />
                <div className='text'>
                    <h2 className='font'><b>Welcome! Let's talk podcast</b></h2>
                    <p className=''>Log In to continue access</p>
                </div>
            </div>

            <div className=' bg-whitebc bg-sm my-5  '>
                <form action='POST' className='text'>
                    <h2><b> Log In</b></h2>
                    <div className='formElements'>
                        <input type="email" placeholder="Email" className='border' value={email} onChange=
                            {(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="New password" className='border' value={password} onChange=
                            {(e) => setPassword(e.target.value)} />
                    </div>
                    <p>Don't have an account? <Link to="/signup" className='btn'><b>Sign Up</b></Link></p>
                    <button className='bot btn px-5 py-2' onClick={login} ><b> Log In</b></button>
                </form>
            </div>

      
        </div>
    );
    }


export default Login;


