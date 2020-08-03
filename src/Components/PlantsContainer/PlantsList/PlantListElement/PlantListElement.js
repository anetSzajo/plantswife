import React from 'react';

import PlantShortDescription from './PlantShortDescription/PlantShortDescription';
import PlantPhoto from "./PlantPhoto/PlantPhoto";
import PlantButtons from "./PlantButtons/PlantButtons";
import './styles.scss';

function PlantListElement({ plant }){
    return(
        <div className="plantListElement">
            <div className="plantListElement__menu">
                <PlantPhoto />
                <PlantButtons />
            </div>
            <PlantShortDescription plant={plant}/>
        </div>
    )
}

export default PlantListElement;