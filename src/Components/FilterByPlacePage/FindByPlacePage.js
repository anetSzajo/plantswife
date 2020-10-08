import React from 'react';

import GoHomeButton from "../SharedComponents/GoHomeButton/GoHomeButton";
import PlaceTile from "./PlaceTile/PlaceTile";
import './findByPlacePage.scss';
import {Redirect} from "react-router-dom";

class FindByPlacePage extends React.Component{
    componentDidMount(){
            document.body.style.backgroundColor = "#F2F2F2";

        }

    componentWillUnmount(){
        document.body.style.backgroundColor = null;
    }


    // state = {
    //     filterByPlace: false,
    //     place: ''
    // }
    //
    //
    // handleClick = () => {
    //     this.setState(
    //         {
    //             filterByPlace: true,
    //             place: this.props.place
    //         }
    //     )
    // }


    render(){
        // if (this.state.filterByPlace) {
        //     return <Redirect to={
        //         {
        //             pathname: '/',
        //             state: {place: this.state.place, filterByPlace: true}
        //         }
        //     }
        //     />
        // } else {
            return(
                <div className="findByPlacePage">
                    <h1>Choose a place to see all the plants living there...</h1>
                    <div className="placeTiles--list">
                        <PlaceTile img="/icons/armchair.png" name="Living Room" place="livingRoom" />
                        <PlaceTile img="/icons/bed.png" name="Bedroom" place="bedroom" />
                        <PlaceTile img="/icons/dinner.png" name="Dining Room"  place="diningRoom" />
                        <PlaceTile img="/icons/kitchen.png" name="Kitchen" place="kitchen" />
                        <PlaceTile img="/icons/balcony.png" name="Balcony"  place="balcony" />
                        <PlaceTile img="/icons/hall.png" name="Hall" place="hall" />
                    </div>
                    <GoHomeButton />
                </div>
            )
        // }

    }
}

export default FindByPlacePage;