import React from "react";
import PlantFullDescription from './PlantFullDescription/PlantFullDescription';
import Footer from "../Footer/Footer";
import PlantButtons from "../PlantsContainer/PlantsList/PlantListElement/PlantButtons/PlantButtons";
import PlantPhoto from "../PlantsContainer/PlantsList/PlantListElement/PlantPhoto/PlantPhoto";
import AddNewPlantPhoto from "./AddNewPlantPhoto/AddNewPlantPhoto";

function PlantViewPage() {
    return(
        <div>
            <PlantPhoto />
            <AddNewPlantPhoto />
            <PlantButtons />
            <PlantFullDescription />
            <button className="deleteButton">
                <img src="" alt="" />
            </button>
            <Footer />
        </div>
    )
}

export default PlantViewPage;