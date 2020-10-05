import React, {useState} from 'react';
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

    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);

     const setTokens = (data) => {
         localStorage.setItem("tokens", JSON.stringify(data));
         setAuthTokens(data);
     }

  return (
    <div className="App">
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens } }>
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signUp" component={SignUp} />
                    <Route exact path="/createNewPlant" component={NewPlantPage} />
                    <PrivateRoute exact path="/filterByPlace" component={FindByPlacePage} />
                    <Route exact path="/plantViewPage/:plantid" component={PlantPage} />
                    <Route exact path="/" component={HomePage}/>
                </Switch>
            </Router>
        </AuthContext.Provider>
        <Footer />
    </div>
  );
}

export default App;
