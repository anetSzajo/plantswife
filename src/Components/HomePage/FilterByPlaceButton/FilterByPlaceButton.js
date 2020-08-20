import React from 'react';
import { Link } from 'react-router-dom';

import './filterByPlaceButton.scss';

function FilterByPlaceButton() {
    return(
        <button className="filterByPlace--button"><Link to={"/filterPlants"}>FIND BY PLACE</Link></button>
    )
}

export default FilterByPlaceButton;