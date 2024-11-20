import React, { useLayoutEffect, useRef, useState } from 'react'

const Layout = () => {
    const [width,setWidth]= useState(0);
    const divRef = useRef(null);
    useLayoutEffect (() => {
        const updateWidth = () => {
        if(divRef.current){
             setWidth(divRef.current.offsetWidth);
        }
    };

    updateWidth();
    window.addEventListener('resize',updateWidth);

    return () => {
    window.removeEventListener('resize',updateWidth);

    };
    },[]);
    
  return (
    <div 
    ref={divRef}
    style={{
    border: '1px solid balck',
    padding: '20px',
    textAlign:'center',
    backgroundColor:'red',
    resize: 'horizontal',
    overflow :'auto',
    }}>
      Width: {width}px
    </div>
  )
}

export default Layout
