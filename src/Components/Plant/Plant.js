import React from 'react';

function Plant({ plant }){
    return(
        <div>
            <p>Id: {plant.id}</p>
            <p>Name: {plant.name}</p>
            <p>Next watering: {plant.nextWatering}</p>
            <p>Next feeding: {plant.nextFeeding}</p>
            <p>Next spraing: {plant.nextSpraing}</p>
            <p>Place: {plant.place}</p>
        </div>
    )
}

export default Plant;