import React from 'react';
import { Link } from 'react-router-dom';
import './plantMoreInfoButton.scss';

function PlantMoreInfoButton(){
    return(
        <button className="moreInfoButton"><Link to="/plantViewPage">more...</Link></button>
    )
}

export default PlantMoreInfoButton;