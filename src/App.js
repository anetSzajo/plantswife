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
import Login from "./Components/Auth/Login/Login";
import SignUp from "./Components/Auth/SignUp/SignUp";
import {AuthContext} from "./Context/auth";
import PrivateRoute from "./Components/Auth/PrivateRoute/PrivateRoute";


function App(props) {
  return (
    <div className="App">
        <AuthContext.Provider value={ false }>
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signUp" component={SignUp} />
                    <PrivateRoute exact path="/createNewPlant" component={NewPlantPage} />
                    <PrivateRoute exact path="/filterByPlace" component={FindByPlacePage} />
                    <PrivateRoute exact path="/plantViewPage/:plantid" component={PlantPage} />
                    <PrivateRoute exact path="/" component={HomePage}/>
                </Switch>
            </Router>
        </AuthContext.Provider>
        <Footer />
    </div>
  );
}

export default App;
