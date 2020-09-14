import React from 'react';
import axios from 'axios';

import './plantButtons.scss';

class PlantButtons extends React.Component {

    handlePlantWatering = () => {

        axios.post(`plants/${this.props.plantId}/watering`,
            {},{ headers: { 'Content-Type': 'application/json' }})
            .catch(error => {
                console.log(error)
            })
        this.props.onPlantUpdate();
    }

    // handlePlantSpraing = () => {
    //     this.plantUpdate(this.plant.spraing)
    // }
    // handlePlantFeeding = () => {
    //     this.plantUpdate(this.plant.feeding);
    // }

    render(){

        return(
            <div className="plantButtons-bar">
                <button className="plantButton" onClick={this.handlePlantWatering}>
                    <img src="/icons/watering-can.png" alt="" className={`${ this.props.fullDescriptionView && 'largeButton'}`}/>
                </button>
                <button className="plantButton" onClick={this.handlePlantSpraing}>
                    <img src="/icons/water-sprayer.png" alt="" className={`${ this.props.fullDescriptionView && 'largeButton'}`}/>
                </button>
                <button className="plantButton" onClick={this.handlePlantFeeding}>
                    <img src="/icons/bottle.png" alt="" className={`${ this.props.fullDescriptionView && 'largeButton'}`}/>
                </button>
            </div>
        )
    }

}
export default PlantButtons;