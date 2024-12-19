"use strict";

import 'bootstrap/dist/css/bootstrap.min.css';
import State from './components/State';
import Effect from './components/Effect';
import Props from './components/Props';

const App = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Homework 49: Start learning react</h1>

            <State />
            <Effect />
            <Props />
        </div>
    );
}

export default App;
