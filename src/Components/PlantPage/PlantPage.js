import React from "react";
import { Link } from 'react-router-dom';

import PlantButtons from "../SharedComponents/PlantButtons/PlantButtons";
import PlantPhoto from "../SharedComponents/PlantPhoto/PlantPhoto";
import './plantPage.scss';
import PlantShortDescription from "../SharedComponents/PlantShortDescription/PlantShortDescription";
import AddNewPlantPhoto from "./AddNewPlantPhoto/AddNewPlantPhoto";

class PlantPage extends React.Component {
    state = {
        plant: {}
    }
    componentDidMount(){
        const plantId = this.props.match.params.plantid;

        fetch('/databaseFull.json')
            .then(response => response.json())
            .then(data => this.setState({
                    plant: data.filter(plant => ''+plant.id === plantId)[0]
                }))

            .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                <div className="plantViewPageBody">
                    <PlantPhoto fullDescriptionView={true}/>
                    <AddNewPlantPhoto />
                    <PlantButtons fullDescriptionView={true}/>
                    <div className="plantFullDescription">
                        <PlantShortDescription plant={this.state.plant}/>
                        <div className="plantDescription">
                                <div className="plantDescription__column column-first">
                                    <p>Watering interval: </p>
                                    <p>Last watering: </p>
                                    <p>Spraing interval: </p>
                                    <p>Last spraing: </p>
                                    <p>Feeding interval: </p>
                                    <p>Last feeding: </p>
                                    <p>Notes: </p>
                                </div>
                                <div className="plantDescription__column">
                                    <p>{this.state.plant.wateringInterval}</p>
                                    <p>{this.state.plant.lastWatering}</p>
                                    <p>{this.state.plant.sparingInterval}</p>
                                    <p>{this.state.plant.lastSpraing}</p>
                                    <p>{this.state.plant.feedingInterval}</p>
                                    <p>{this.state.plant.lastFeeding}</p>
                                    <p>{this.state.plant.notes}</p>
                                </div>
                            </div>
                        </div>
                    <div className="editAndDeleteButtons">
                        <button className="editButton">
                            <img src="/icons/edit-icon.png" alt="" />
                        </button>
                        <button className="deleteButton">
                            <img src="/icons/trash.png" alt="" />
                        </button>
                    </div>
                    <button className="backHomeButton">
                        <Link to={`/`}>HOME</Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default PlantPage;