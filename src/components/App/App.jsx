import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <CalculatorContainer />
            </main>
        </div>
    );
}

export default App;
