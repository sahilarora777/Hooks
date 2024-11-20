import React from 'react';
import { useState, useRef } from 'react';

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const timeRef = useRef(null);

    const StartTimer = () => {
        if (!timeRef.current) {
            timeRef.current = setInterval(() => { setTime(prevTime => prevTime + 1); }, 500);
        }
    };

    const StopTimer = () => {
        clearInterval(timeRef.current);
        timeRef.current = null;
    };

    const ResetTimer = () => {
        StopTimer();
        setTime(0);
    };

    return (
        <div className="flex flex-col items-center font-sans p-4">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">StopWatch: {time} seconds</h2>
            <div className="flex space-x-4">
                <button 
                    className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
                    onClick={StartTimer}
                >
                    Start
                </button>
                <button 
                    className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
                    onClick={StopTimer}
                >
                    Stop
                </button>
                <button 
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
                    onClick={ResetTimer}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default StopWatch;
