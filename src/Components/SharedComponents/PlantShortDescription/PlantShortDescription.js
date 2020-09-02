import React from 'react';
import './plantShortDescription.scss';

function PlantShortDescription({ plant }){
    return(
            <div className="plantShortDescription">
                <div className="plantShortDescription__column column-first">
                    <p>Id: </p>
                    <p>Name: </p>
                    <p>Next watering: </p>
                    <p>Next feeding: </p>
                    <p>Next spraing: </p>
                    <p>Place: </p>
                </div>
                <div className="plantShortDescription__column">
                    <p>{plant.id}</p>
                    <p>{plant.name}</p>
                    <p>{plant.watering.nextTimeProcessed}</p>
                    <p>{plant.feeding.nextTimeProcessed}</p>
                    <p>{plant.spraing.nextTimeProcessed}</p>
                    <p>{plant.place}</p>
                </div>
            </div>
    )
}

export default PlantShortDescription;