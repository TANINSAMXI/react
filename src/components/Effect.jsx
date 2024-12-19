"use strict";

import { useState, useEffect } from 'react';

const Effect = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">useEffect Example</h5>
                <p className="card-text">Current time: {time}</p>
            </div>
        </div>
    );
}

export default Effect;
