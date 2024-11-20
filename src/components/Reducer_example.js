import React, { useRef } from 'react'

const Reducer_example = () => {
 const inputRef =useRef(null);
    const handleClick =()=>{
     inputRef.current.focus();
 }
    return (
    <div className='ml-20 mt-5'>
      <input className='border-2 border-black text-center' ref={inputRef} type='text'/>
      <button onClick={handleClick}>Focus Input </button>
    </div>
  )
}

export default Reducer_example
