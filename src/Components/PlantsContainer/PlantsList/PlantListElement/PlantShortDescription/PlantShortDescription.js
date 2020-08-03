import React from 'react';
import '../styles.scss';

function PlantShortDescription({ plant }){
    return(
            <div className="plantDescription">
                <div className="plantDescription__column column-first">
                    <p>Id: </p>
                    <p>Name: </p>
                    <p>Next watering: </p>
                    <p>Next feeding: </p>
                    <p>Next spraing: </p>
                    <p>Place: </p>
                </div>
                <div className="plantDescription__column">
                    <p>{plant.id}</p>
                    <p>{plant.name}</p>
                    <p>{plant.nextWatering}</p>
                    <p>{plant.nextFeeding}</p>
                    <p>{plant.nextSpraing}</p>
                    <p>{plant.place}</p>
                </div>
            </div>
    )
}

export default PlantShortDescription;