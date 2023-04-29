import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import CalculatorContainer from '../CalculatorContainer/CalculatorContainer.jsx';




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
