import React from 'react';

import AddNewPlantButton from './AddNewPlantButton/AddNewPlantButton';
import PlantListPage from "../PlantListPage/PlantListPage";
import HomePageBackground from "./HomePageBackground/HomePageBackground";
import FindByPlaceButton from "./FindByPlaceButton/FindByPlaceButton";
import LogoutButton from "../SharedComponents/LogoutButton/LogoutButton";

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <HomePageBackground/>
                <AddNewPlantButton/>
                <FindByPlaceButton/>
                <LogoutButton />
                <PlantListPage
                    filterByPlace={this.props.location.state?.filterByPlace}
                    place={this.props.location.state?.place}
                />
            </div>
        )
    }
}

export default HomePage;