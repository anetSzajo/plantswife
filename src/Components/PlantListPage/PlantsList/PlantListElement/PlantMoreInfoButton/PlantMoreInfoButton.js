import React from 'react';
import { Link } from 'react-router-dom';
import './plantMoreInfoButton.scss';

function PlantMoreInfoButton({plant}){
    return(
        <button className="moreInfoButton"><Link to={`/plantViewPage/${plant.id}`}>more...</Link></button>
    )
}

export default PlantMoreInfoButton;