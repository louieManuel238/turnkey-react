import React from 'react';
import logo from './TurnKeyLogo.png';
import img1 from './TurnKeyLogo.png';
import info from './data.json';

function Matches(props) {
    return (
        <div>
             <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <img src={img1} className="App-logo" alt="logo" />
            

        </div>
    );
}

export default Matches;