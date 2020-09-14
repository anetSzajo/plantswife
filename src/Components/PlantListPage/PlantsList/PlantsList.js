import React from 'react';
import PlantListElement from './PlantListElement/PlantListElement';

function PlantsList ({ plants, plantProcessTriggered }){
    return(
        <div>
            {plants.map(plant => ( <PlantListElement key={`${plant.name}${plant.id}`} plant={plant} plantProcessTriggered={plantProcessTriggered} />)) }
        </div>
    )
}

export default PlantsList;