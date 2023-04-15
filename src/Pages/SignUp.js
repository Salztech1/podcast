import React from 'react';
import './login.css'
import logo from '../../src/Images/Salz Logo.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

function SignUp() {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signup(e) {
            e.preventDefault();


        let url = 'http://localhost:8000/api/v1/users/signup';

        let body = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            number: number,
        }

        // axios call
        axios.post(url, body).then(response => {
            // console.log(response)
            if(response.status === 200) {
                console.log('redirecting')
                navigate('/')
            }
        }).catch(error => {
            console.log(error)
        });
    }

    return (
        <div className='container-wrapper container2 ' >
            <div className=' background background2 text-white my-5 '>
                <img src={logo} alt='' className='logo2 my-3 mx-2' />
                <div className='text'>
                    <h2 className='font'><b>Welcome! Let's talk podcast</b></h2>
                    <p className=''>SignUp to continue access</p>
                </div>
            </div>

            <div className=' bg-whitebc bg-sm my-5  '>
                <form  className='text'>
                    <h2><b> Sign Up</b></h2>
                    <div className='formElements'>
                        <input type="txt" placeholder="First Name" className='border' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <input type="text" placeholder="Last Name" className='border' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        <input type="number " placeholder="Mobile number" className='border' value={number} onChange={(e) => setNumber(e.target.value)} />
                        <input type="email" placeholder="Email" className='border' value={email} onChange=
                            {(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" className='border' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <p>
                        Already a member? <Link to='/login' className='btn'><b>Log In</b></Link>
                    </p>

                    <button className='bot btn px-5 py-2' onClick={signup}><b>Sign Up</b></button>
                </form>
            </div>

        </div>
    );
}

export default SignUp;


// April 4th, 2023
// HRLocker

// Dear [Sir/Madam],
// With an experience in creating and delivering user-centric applications and solutions. I look forward to bringing my strong creative, technical and analytical skills to Front End Developer opening at [HRLocker].

// Throughout learning process with Data Girl Technologies, I have been acknowledged as a solution-focused professional with the ability to design and develop innovative applications using advanced technology. Furthermore, I collaborated closely with my team to learn and develop beautiful applications.
