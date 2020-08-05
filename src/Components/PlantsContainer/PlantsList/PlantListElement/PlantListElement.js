import React from 'react';

import PlantShortDescription from '../../../SharedComponents/PlantShortDescription/PlantShortDescription';
import PlantPhoto from "../../../SharedComponents/PlantPhoto/PlantPhoto";
import PlantButtons from "../../../SharedComponents/PlantButtons/PlantButtons";
import PlantMoreInfoButton from "./PlantMoreInfoButton/PlantMoreInfoButton";
import './plantListElement.scss';

function PlantListElement({ plant }){
    return(
        <div className="plantListElement">
            <div className="plantListElement__menu">
                <PlantPhoto />
                <PlantButtons />
            </div>
            <PlantShortDescription plant={plant}/>
            <PlantMoreInfoButton />
        </div>
    )
}

export default PlantListElement;