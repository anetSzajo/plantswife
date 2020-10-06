import React from 'react';
import { Link } from 'react-router-dom';

import './findByPlaceButton.scss';

function FindByPlaceButton() {
    return(
        <button className="filterByPlace--button"><Link to="/filterByPlace">FIND BY PLACE</Link></button>
    )
}

export default FindByPlaceButton;