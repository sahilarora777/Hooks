import React from 'react'
import { useState } from 'react'

const counterusememo = () => {

    const [count,setCount] = useState(0);
    const [othercount,setOtherCount] = useState(0);
    const calculation =  expensiveCalcilation(count);
    
    


  return (
    <div>
      
    </div>
  )
}

export default counterusememo
