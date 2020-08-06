import React from 'react';
import PlantListElement from './PlantListElement/PlantListElement';

function PlantsList ({ plants }){
    return(
        <div>
            {plants.map(plant => ( <PlantListElement key={`${plant.name}${plant.id}`} plant={plant} />)) }
        </div>
    )
}

export default PlantsList;