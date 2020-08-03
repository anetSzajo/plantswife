import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import PlantViewPage from "./Components/PlantViewPage/PlantViewPage";
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/plantViewPage" component={PlantViewPage} />
                <Route path="/"><HomePage /></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
