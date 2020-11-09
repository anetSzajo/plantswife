import React from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import {AuthContext} from "../../Context/auth";

import PlantButtons from "../SharedComponents/PlantButtons/PlantButtons";
import PlantPhoto from "../SharedComponents/PlantPhoto/PlantPhoto";
import AddNewPlantPhoto from "./AddNewPlantPhoto/AddNewPlantPhoto";
import GoHomeButton from "../SharedComponents/GoHomeButton/GoHomeButton";
import PlantFullDescription from "./PlantFullDescription/PlantFullDescription";

import '../SharedComponents/PlantShortDescription/plantShortDescription.scss';
import './plantPage.scss';

class PlantPage extends React.Component {
    state = {
        plantById: {},
        imageURL: '',
        loaded: false,
        redirectToHome: false,
        isEditOn: false
    }

    static contextType = AuthContext;

    fetchPlant = () => {
        const plantId = this.props.match.params.plantid;

        axios.get(`plants/${plantId}`,
            {
                headers:
                    {
                        Authorization: `Bearer ${this.context.authTokens.access_token}`
                    }
            })
            .then(res => this.setState({
                plantById: res.data,
                loaded: true
            }))
            .catch(error => {
                console.log(error)
            })
    }

    fetchPlantImage = () => {
        const plantId = this.props.match.params.plantid;

        axios.get(`plants/${plantId}`, {
            headers:
                {
                    Authorization: `Bearer ${this.context.authTokens.access_token}`
                }
        })
            .then(res => this.setState(
                {
                    imageURL: res.data
                    }
                )
            )
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount(){
      this.fetchPlant();
      this.fetchPlantImage();
    }

    handleEditButton = () => {
        this.setState({
            isEditOn: true
        })
    }

    submitUpdatedPlantForm = (plant) => {

        axios.put(`plants/${plant.id}`,
            {...plant},{
                headers:
                    {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.context.authTokens.access_token}`
                    }
                })
            .then(x => this.setState({
                isEditOn: false
            }))
            .then(() => this.fetchPlant())
            .catch(error => {
                console.log(error)
            })
    }

    handleCancelButton = () => {
        this.setState(
            {
                isEditOn: false
            }
        )
    }

    handleDeleteButton = () => {
        axios.delete(`plants/${this.state.plantById.id}`,
            {
                headers:
                    {
                        Authorization: `Bearer ${this.context.authTokens.access_token}`
                    }
            })
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
        const { redirectToHome } = this.state;

        if (redirectToHome) {
            return <Redirect to="/" />
        }

        if (this.state.loaded) {
            return (
                <div className="plantViewPageBody">
                    <PlantPhoto
                        fullDescriptionView={true}
                        allowAddNewPlantPhoto={true}
                        plant={this.state.plantById}
                    />
                    <PlantButtons plantId={this.state.plantById.id}
                                  fullDescriptionView={true}
                                  plantProcessTriggered={() => this.fetchPlant() }/>
                    <PlantFullDescription
                        plant={this.state.plantById}
                        isEditOn={this.state.isEditOn}
                        handleEditButton={this.handleEditButton}
                        handleDeleteButton={this.handleDeleteButton}
                        handleCancelButton={this.handleCancelButton}
                        submitUpdatedPlantForm={this.submitUpdatedPlantForm}
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