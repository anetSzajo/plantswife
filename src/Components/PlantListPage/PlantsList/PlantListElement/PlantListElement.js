import React from 'react';

import PlantShortDescription from '../../../SharedComponents/PlantShortDescription/PlantShortDescription';
import PlantPhoto from "../../../SharedComponents/PlantPhoto/PlantPhoto";
import PlantButtons from "../../../SharedComponents/PlantButtons/PlantButtons";
import PlantMoreInfoButton from "./PlantMoreInfoButton/PlantMoreInfoButton";
import './plantListElement.scss';

function PlantListElement({ plant, plantProcessTriggered }){
    return(
        <div className="plantListElement">
            <div className="plantListElement__menu">
                <PlantPhoto plant={plant}/>
                <PlantButtons plantId={plant.id} plantProcessTriggered={plantProcessTriggered}/>
            </div>
            <PlantShortDescription plant={plant}/>
            <PlantMoreInfoButton plant={plant}/>
        </div>
    )
}

export default PlantListElement;