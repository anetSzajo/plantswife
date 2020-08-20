import React from "react";
import './placeTile.scss';

function PlaceTile(props){
    return(
        <div className="findByPlaceTile">
            <img src={props.img} alt="" />
            <p>{props.name}</p>
        </div>
    )
}

export default PlaceTile;