import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import PlantPage from "./Components/PlantPage/PlantPage";
import './App.css';
import Footer from "./Components/Footer/Footer";
import NewPlantPage from "./Components/NewPlantPage/NewPlantPage";
import FindByPlacePage from "./Components/FilterByPlacePage/FindByPlacePage";


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/createNewPlant" component={NewPlantPage} />
                <Route exact path="/filterByPlace" component={FindByPlacePage} />
                <Route exact path="/plantViewPage/:plantid" component={PlantPage} />
                <Route path="/"><HomePage /></Route>
            </Switch>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
