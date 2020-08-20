import React from 'react';

import AddNewPlantButton from './AddNewPlantButton/AddNewPlantButton';
import PlantListPage from "../PlantListPage/PlantListPage";
import HomePageBackground from "./HomePageBackground/HomePageBackground";
import FindByPlaceButton from "./FindByPlaceButton/FindByPlaceButton";

function HomePage () {
    return(
        <div>
            <HomePageBackground />
            <AddNewPlantButton />
            <FindByPlaceButton />
            <PlantListPage />
        </div>
    )
}

export default HomePage;