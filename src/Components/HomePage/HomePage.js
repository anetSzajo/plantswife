import React from 'react';

import AddNewPlantButton from './AddNewPlantButton/AddNewPlantButton';
import PlantListPage from "../PlantListPage/PlantListPage";
import HomePageBackground from "./HomePageBackground/HomePageBackground";

function HomePage () {
    return(
        <div>
            <HomePageBackground />
            <AddNewPlantButton />
            <PlantListPage />
        </div>
    )
}

export default HomePage;