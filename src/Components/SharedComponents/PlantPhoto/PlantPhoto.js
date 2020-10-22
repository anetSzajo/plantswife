import React from "react";
import './plantPhoto.scss';
import AddNewPlantPhoto from "../../PlantPage/AddNewPlantPhoto/AddNewPlantPhoto";

function PlantPhoto(props){
        return (
            <div className={`plantPhoto__container ${ props.fullDescriptionView && 'largePhoto'}`}>
                <img className="plantPhoto" src="/plantsPhotos/monstera.png" alt="" />
                {props.allowAddNewPlantPhoto
                    ?
                    <AddNewPlantPhoto/>
                    :
                    null
                }
            </div>)
}

export default PlantPhoto;