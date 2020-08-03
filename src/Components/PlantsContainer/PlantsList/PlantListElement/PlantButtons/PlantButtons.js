import React from 'react';
import '../styles.scss';

class PlantButtons extends React.Component {
    // handlePlantWatering = () => {
    //
    // }
    // handlePlantSpraing = () => {
    //
    // }
    // handlePlantFeeding = () => {
    //
    // }

    render(){
        return(
            <div className="plantButtons-bar">
                <button className="plantButton" onClick={this.handlePlantWatering}>
                    <img src="icons/watering-can.png" alt=""/>
                </button>
                <button className="plantButton" onClick={this.handlePlantSpraing}>
                    <img src="icons/water-sprayer.png" alt=""/>
                </button>
                <button className="plantButton" onClick={this.handlePlantFeeding}>
                    <img src="icons/bottle.png" alt=""/>
                </button>
            </div>
        )
    }

}
export default PlantButtons;