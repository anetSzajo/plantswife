import React from 'react';

import PlantShortDescription from './PlantShortDescription/PlantShortDescription';
import PlantPhoto from "./PlantPhoto/PlantPhoto";
import PlantButtons from "./PlantButtons/PlantButtons";

function PlantListElement({ plant }){
    return(
        <div>
            <PlantPhoto />
            <PlantButtons />
            <PlantShortDescription plant={plant}/>
        </div>
    )
}

export default PlantListElement;