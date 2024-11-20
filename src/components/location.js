import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState();


    return (
        <div className="Counter">
            <p>Current Count: {count}</p>

            <label className="label">step{setStep}</label>

            <input 
                    type="number" 
                    value={step} 
                    onChange={(e) => setStep(Number(e.target.value))} // Update step value
                    style={{ marginLeft: '10px', padding: '5px', width: '50px' }}
                />

            <button 
                onClick={() => setCount(count - step)} 
                style={{ marginRight: '10px', backgroundColor: 'lightcoral', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
            >
                Decrement
            </button>
            <button 
                onClick={() => setCount(count + step)} 
                style={{ backgroundColor: 'lightseagreen', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
            >
                Increment
            </button>
            
            <button 
                onClick={() => setCount(0)} 
                style={{ marginLeft: '20px', backgroundColor: 'lightcoral', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
            >
                Reset
            </button>

        </div>
    );
}

export default Counter;
 