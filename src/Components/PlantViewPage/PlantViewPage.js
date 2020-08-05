import React from "react";
import PlantFullDescription from './PlantFullDescription/PlantFullDescription';
import Footer from "../Footer/Footer";
import PlantButtons from "../SharedComponents/PlantButtons/PlantButtons";
import PlantPhoto from "../SharedComponents/PlantPhoto/PlantPhoto";
import AddNewPlantPhoto from "./AddNewPlantPhoto/AddNewPlantPhoto";
import './plantViewPage.scss';

function PlantViewPage() {
    return(
        <div>
            <div className="plantViewPageBody">
                <PlantPhoto fullDescriptionView={true}/>
                <PlantButtons fullDescriptionView={true}/>
                <PlantFullDescription />
                <button className="deleteButton">
                    <img src="icons/trash.png" alt="" />
                </button>
            </div>
            <Footer />
        </div>
    )
}

export default PlantViewPage;