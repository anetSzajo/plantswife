import React from 'react';

import Footer from '../Footer/Footer';
import AddNewPlantButton from './AddNewPlantButton/AddNewPlantButton';
import PlantsContainer from "../PlantsContainer/PlantsContainer";
import HomePageBackground from "./HomePageBackground/HomePageBackground";

function HomePage () {
    return(
        <div>
            <HomePageBackground />
            <AddNewPlantButton />
            <PlantsContainer />
            <Footer />
        </div>
    )
}

export default HomePage;