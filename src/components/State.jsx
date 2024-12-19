"use strict";

import { useState } from 'react';

const State = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">useState Example</h5>
                <p className="card-text">You clicked {count} times.</p>
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        </div>
    );
}

export default State;
