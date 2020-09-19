import React from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';

import PlantButtons from "../SharedComponents/PlantButtons/PlantButtons";
import PlantPhoto from "../SharedComponents/PlantPhoto/PlantPhoto";
import PlantShortDescription from "../SharedComponents/PlantShortDescription/PlantShortDescription";
import AddNewPlantPhoto from "./AddNewPlantPhoto/AddNewPlantPhoto";
import GoHomeButton from "../SharedComponents/GoHomeButton/GoHomeButton";
import '../SharedComponents/PlantShortDescription/plantShortDescription.scss';
import './plantPage.scss';
import {defaultDateFormat} from "../NewPlantPage/NewPlantPage";

const moment = require('moment');

class PlantPage extends React.Component {
    state = {
        plantById: {},
        loaded: false,
        redirect: false
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

    handleEditButton = () => {
        // const plantId = this.state.plantById.id;

        axios.put(`plants/${this.state.plantById.id}`,
            {},{ headers: { 'Content-Type': 'application/json' }})
            .then(res => this.fetchPlant())
            .catch(error => {
                console.log(error)
            })
    }

    handleDeleteButton = () => {
        axios.delete(`plants/${this.state.plantById.id}`)
            .then(x => console.log("Plant deleted"))
            .then(res => this.setState(
                {
                    redirect: true
                }
            ))
            .catch(error => {
                console.log(error)
            })
    }

    formatIntervalString = (string) => {
        return string.replace(/([a-zA-Z])(?=[A-Z])/g, '$1 ').toLowerCase();
    }

    render(){
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />
        }

        if (this.state.loaded) {
            return (
                <div className="plantViewPageBody">
                    <PlantPhoto fullDescriptionView={true}/>
                    <AddNewPlantPhoto/>
                    <PlantButtons plantId={this.state.plantById.id}
                                  fullDescriptionView={true}
                                  plantProcessTriggered={this.fetchPlant}/>
                    <div className="plantFullDescription">
                        <PlantShortDescription plant={this.state.plantById}/>
                        <div className="plantDescription">
                            <div className="row">
                                <div  className="column first">Watering interval:</div>
                                <div className="column">
                                    {this.formatIntervalString(this.state.plantById.watering.interval)}
                                </div>
                            </div>
                            <div className="row">
                                <div  className="column first">
                                    Last watering:
                                </div>
                                <div className="column">
                                    {moment(this.state.plantById.watering.lastTimeProcessed).format(defaultDateFormat)}
                                </div>
                            </div>
                            <div className="row">
                                <div  className="column first">Spraing interval:</div>
                                <div className="column">
                                    {this.formatIntervalString(this.state.plantById.spraing.interval)}
                                </div>
                            </div>
                            <div className="row">
                                <div  className="column first">Last spraing:</div>
                                <div className="column">{
                                    moment(this.state.plantById.spraing.lastTimeProcessed).format(defaultDateFormat)}
                                </div>
                            </div>
                            <div className="row">
                                <div  className="column first">Feeding interval:</div>
                                <div className="column">
                                    {this.formatIntervalString(this.state.plantById.feeding.interval)}
                                </div>
                            </div>
                            <div className="row">
                                <div  className="column first">Last feeding:</div>
                                <div className="column">
                                    {moment(this.state.plantById.feeding.lastTimeProcessed).format(defaultDateFormat)}
                                </div>
                            </div>
                            <div className="row">
                                <div  className="column first">Notes:</div>
                                <div className="column">
                                    {this.state.plantById.notes}
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="editButton" onClick={this.handleEditButton}>
                                <img src="/icons/edit-icon.png" alt=""/>
                            </button>
                            <button className="deleteButton" onClick={this.handleDeleteButton}>
                                <img src="/icons/trash.png" alt=""/>
                            </button>
                        </div>
                    </div>
                    <GoHomeButton/>
                </div>
            )
        }
        else{
            return null;
        }
    }
}

export default PlantPage;