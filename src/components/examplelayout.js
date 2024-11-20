import React, { useLayoutEffect, useRef, useState } from 'react'

const Examplelayout = () => {
    const [bgColor,setbgColor]= useState("lightblue");
    const divRef = useRef(null);
    useLayoutEffect(()=>{
        const width =divRef.current.offsetWidth;    
        if(width>600){
            setbgColor("lightgreen");
        }else{
            setbgColor("red");
        }
    },[])
  return (
    <div 
    ref={divRef}
    style={{
        width:"90%",
        margin:"30px auto",
        padding:"30%",
        textAlign:"center",
        backgroundColor:bgColor,
    }}>
      
    </div>
  )
}

export default Examplelayout
