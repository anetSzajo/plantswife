import React from "react";
import axios from "axios";

import PlantButtons from "../SharedComponents/PlantButtons/PlantButtons";
import PlantPhoto from "../SharedComponents/PlantPhoto/PlantPhoto";
import PlantShortDescription from "../SharedComponents/PlantShortDescription/PlantShortDescription";
import AddNewPlantPhoto from "./AddNewPlantPhoto/AddNewPlantPhoto";
import GoHomeButton from "../SharedComponents/GoHomeButton/GoHomeButton";
import './plantPage.scss';
import {defaultDateFormat} from "../NewPlantPage/NewPlantPage";

const moment = require('moment');

class PlantPage extends React.Component {
    state = {
        plantById: {},
        loaded: false
    }

    fetchPlant = () => {
        const plantId = this.props.match.params.plantid;

        axios.get(`plants/${plantId}`)
            .then(res => this.setState({
                plantById: res.data,
                loaded: true
            }))
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount(){
      this.fetchPlant();
    }

    render(){
        if (this.state.loaded) {
            return (
                <div>
                    <div className="plantViewPageBody">
                        <PlantPhoto fullDescriptionView={true}/>
                        <AddNewPlantPhoto/>
                        <PlantButtons plantId={this.state.plantById.id}
                                      fullDescriptionView={true}
                                      plantProcessTriggered={this.fetchPlant}/>
                        <div className="plantFullDescription">
                            <PlantShortDescription plant={this.state.plantById}/>
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
                                    <p>{this.state.plantById.watering.interval}</p>
                                    <p>{moment(this.state.plantById.watering.lastTimeProcessed).format(defaultDateFormat)}</p>
                                    <p>{this.state.plantById.spraing.interval}</p>
                                    <p>{moment(this.state.plantById.spraing.lastTimeProcessed).format(defaultDateFormat)}</p>
                                    <p>{this.state.plantById.feeding.interval}</p>
                                    <p>{moment(this.state.plantById.feeding.lastTimeProcessed).format(defaultDateFormat)}</p>
                                    <p>{this.state.plantById.notes}</p>
                                </div>
                            </div>
                            <div>
                                <button className="editButton">
                                    <img src="/icons/edit-icon.png" alt=""/>
                                </button>
                                <button className="deleteButton">
                                    <img src="/icons/trash.png" alt=""/>
                                </button>
                            </div>
                        </div>
                        <GoHomeButton/>
                    </div>
                </div>
            )
        }
        else{
            return null;
        }
    }
}

export default PlantPage;