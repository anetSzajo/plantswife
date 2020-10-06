import React from 'react';
import { Route } from "react-router-dom";

import GoHomeButton from "../SharedComponents/GoHomeButton/GoHomeButton";
import PlantsList from '../PlantListPage/PlantsList/PlantsList';
import PlaceTile from "./PlaceTile/PlaceTile";
import './findByPlacePage.scss';

class FindByPlacePage extends React.Component{
    componentDidMount(){
            document.body.style.backgroundColor = "#F2F2F2";
        }

    componentWillUnmount(){
        document.body.style.backgroundColor = null;
    }

    render(){
        return(
            // <Route
            //     path='/'
            //     render = { (props) => (
            //         <PlantsList {...props} plants={filteredPlants} />
            //     )}
            // />
        <div className="findByPlacePage">
            <h1>Choose a place to see all the plants living there...</h1>
            <div className="placeTiles--list">
                <PlaceTile img="/icons/armchair.png" name="Living Room" filteredPlace="livingRoom"/>
                <PlaceTile img="/icons/bed.png" name="Bedroom" filteredPlace="bedroom"/>
                <PlaceTile img="/icons/dinner.png" name="Dining Room" filteredPlace="diningRoom"/>
                <PlaceTile img="/icons/kitchen.png" name="Kitchen" filteredPlace="kitchen"/>
                <PlaceTile img="/icons/balcony.png" name="Balcony" filteredPlace="balcony"/>
                <PlaceTile img="/icons/hall.png" name="Hall" filteredPlace="hall"/>
            </div>
            <GoHomeButton />
        </div>
        )
    }
}

export default FindByPlacePage;