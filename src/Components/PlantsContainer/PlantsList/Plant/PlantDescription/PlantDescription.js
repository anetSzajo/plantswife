import React from 'react';

function PlantDescription({ plant }){
    return(
            <div>
                <div className="plantDescription">
                    <p>Id: {plant.id}</p>
                    <p>Name: {plant.name}</p>
                    <p>Next watering: {plant.nextWatering}</p>
                    <p>Next feeding: {plant.nextFeeding}</p>
                    <p>Next spraing: {plant.nextSpraing}</p>
                    <p>Place: {plant.place}</p>
                </div>
                <button className="moreInfoButton">more...</button>
            </div>
    )
}

export default PlantDescription;