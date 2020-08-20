import React from 'react';

import AddNewPlantButton from './AddNewPlantButton/AddNewPlantButton';
import PlantListPage from "../PlantListPage/PlantListPage";
import HomePageBackground from "./HomePageBackground/HomePageBackground";
import FilterByPlaceButton from "./FilterByPlaceButton/FilterByPlaceButton";

function HomePage () {
    return(
        <div>
            <HomePageBackground />
            <AddNewPlantButton />
            <FilterByPlaceButton />
            <PlantListPage />
        </div>
    )
}

export default HomePage;