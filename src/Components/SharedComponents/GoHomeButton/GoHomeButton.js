import React from "react";
import {Link} from "react-router-dom";
import './goHomeButton.scss';

function GoHomeButton(){
    return(
        <button className="goHomeButton">
            <Link to={`/`}>HOME</Link>
        </button>
    )
}

export default GoHomeButton;