import React from 'react';
import { Link } from 'react-router-dom';

import './addNewPlantButton.scss';

function AddNewPlantButton() {
    return(
        <button className="addNewPlantButton"><Link to={"/createNewPlant"}>ADD NEW PLANT</Link></button>
    )
}

export default AddNewPlantButton;