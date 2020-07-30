import React from 'react';
import Plant from '../Plant/Plant';

function PlantsList ({ plants }){
    return(
        <div>
            {plants.map(plant => ( <Plant key={`${plant.name}${plant.id}`} plant={plant} />)) }
        </div>
    )
}

export default PlantsList;