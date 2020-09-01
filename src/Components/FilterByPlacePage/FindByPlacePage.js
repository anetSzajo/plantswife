import React from 'react';
import GoHomeButton from "../SharedComponents/GoHomeButton/GoHomeButton";
import './findByPlacePage.scss';
import PlaceTile from "./PlaceTile/PlaceTile";

class FindByPlacePage extends React.Component{
    componentDidMount(){
            document.body.style.backgroundColor = "#F2F2F2";
        }

    componentWillUnmount(){
        document.body.style.backgroundColor = null;
    }

    // <Route
    //     path='/pathName'
    //     render = { (props) => (
    //         <Component {...props} propsName={propsValue} />
    //     )}
    // />

    render(){
        return(
        <div className="findByPlacePage">
            <h1>Choose a place to see all the plants living there...</h1>
            <div className="placeTiles--list">
                <PlaceTile img="/icons/armchair.png" name="Living Room" />
                <PlaceTile img="/icons/bed.png" name="Bedroom" />
                <PlaceTile img="/icons/dinner.png" name="Dining Room" />
                <PlaceTile img="/icons/kitchen.png" name="Kitchen" />
                <PlaceTile img="/icons/balcony.png" name="Balcony" />
                <PlaceTile img="/icons/hall.png" name="Hall" />
            </div>
            <GoHomeButton />
        </div>
        )
    }
}

export default FindByPlacePage;