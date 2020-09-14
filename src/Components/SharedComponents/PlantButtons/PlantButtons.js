import React from 'react';
import axios from 'axios';

import './plantButtons.scss';

class PlantButtons extends React.Component {

    handlePlantUpdating(processType){
        axios.post(`plants/${this.props.plantId}/${processType}`,
            {},{ headers: { 'Content-Type': 'application/json' }})
            .then(res => this.props.onPlantUpdate())
            .catch(error => {
                console.log(error)
            })

    }

    render(){

        return(
            <div className="plantButtons-bar">
                <button className="plantButton" onClick={() => this.handlePlantUpdating('watering')}>
                    <img src="/icons/watering-can.png" alt="" className={`${ this.props.fullDescriptionView && 'largeButton'}`}/>
                </button>
                <button className="plantButton" onClick={() => this.handlePlantUpdating('spraing')}>
                    <img src="/icons/water-sprayer.png" alt="" className={`${ this.props.fullDescriptionView && 'largeButton'}`}/>
                </button>
                <button className="plantButton" onClick={() => this.handlePlantUpdating('feeding')}>
                    <img src="/icons/bottle.png" alt="" className={`${ this.props.fullDescriptionView && 'largeButton'}`}/>
                </button>
            </div>
        )
    }

}
export default PlantButtons;