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
import PlantFullDescription from "./PlantFullDescription/PlantFullDescription";


const moment = require('moment');

class PlantPage extends React.Component {
    state = {
        plantById: {},
        loaded: false,
        redirectToHome: false,
        redirectToUpdateForm: false,
        isEditOn: false
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
        this.setState({
            isEditOn: true,
            isHidden: false
        })
        // axios.put(`plants/${this.state.plantById.id}`,
        //     {},{ headers: { 'Content-Type': 'application/json' }})
        //     .then(res => this.fetchPlant())
        //     .catch(error => {
        //         console.log(error)
        //     })
    }

    handleCancelButton = () => {
        this.setState(
            {
                isEditOn: false
            }
        )
    }

    handleDeleteButton = () => {
        axios.delete(`plants/${this.state.plantById.id}`)
            .then(x => console.log("Plant deleted"))
            .then(res => this.setState(
                {
                    redirectToHome: true
                }
            ))
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        const { redirectToHome, redirectToUpdateForm } = this.state;

        if (redirectToHome) {
            return <Redirect to="/" />
        } else if (redirectToUpdateForm) {
            return <Redirect to="/updateForm" />
        }

        if (this.state.loaded) {
            return (
                <div className="plantViewPageBody">
                    <PlantPhoto fullDescriptionView={true}/>
                    <AddNewPlantPhoto/>
                    <PlantButtons plantId={this.state.plantById.id}
                                  fullDescriptionView={true}
                                  plantProcessTriggered={this.fetchPlant}/>
                    <PlantFullDescription
                        plant={this.state.plantById}
                        isEditOn={this.state.isEditOn}
                        handleEditButton={this.handleEditButton}
                        handleDeleteButton={this.handleDeleteButton}
                        handleCancelButton={this.handleCancelButton}
                    />
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