import logo from './TurnKeyLogo.png';
import React, {useState} from 'react';
import info from './data.json';

import { Switch, Route,  BrowserRouter as Router } from "react-router-dom";
import Matches from './Matches';


function App() {

  const [profiles, setProfile] = useState(info.renter)
const [listing, setListing] = useState(info.landlord)

const selected = profiles.find((info) => info.id=== 5)

const landlords = profiles.filter((pinfo) => pinfo.type === "landlord")

  return (
    
    <div className="App">
      <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      <Switch>
        <Route path={"/Matches"}>
              <a>Renter</a><Matches/>
          </Route>
        
      </Switch>
      </Router>
    </div>
 
  );
}

export default App;
