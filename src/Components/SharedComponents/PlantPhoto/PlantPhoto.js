import React from "react";
import './plantPhoto.scss';

function PlantPhoto(props){
    return(
        <div className={`plantPhoto__container ${ props.fullDescriptionView && 'largePhoto'}`}>
            <img className="plantPhoto" src="plantsPhotos/monstera.png" alt="" />
        </div>
    )
}

export default PlantPhoto;