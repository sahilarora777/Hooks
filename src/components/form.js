import React from 'react';
import { useState} from 'react';
import { useRef } from 'react';

const Form = () => {
    const nameRef =useRef(null);
    const emailRef =useRef(null);
    const passwordRef =useRef(null);

const [focusIndex,setFocusIndex] = useState('0');
const inputs = [nameRef, emailRef,  passwordRef];

    const handleClick = () =>{
     inputs[focusIndex].current.focus();

     setFocusIndex((focusIndex + 1) % inputs.length);
    };

  return (
    <div>
      <input className='border-2 border-black text-center' ref={nameRef} type='text' placeholder='Name'/>
     <br></br>
     <br></br>

     <input className='border-2 border-black text-center' ref={emailRef} type='text' placeholder='Email'/>
     <br></br>

     <br></br>
     <input className='border-2 border-black text-center' ref={passwordRef} type='text' placeholder='Password'/>
     <br></br>
     <br></br>
      <button 
                    className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
                    onClick={handleClick}
                >
                    Submit
                </button>
    </div>
  )
}

export default Form
