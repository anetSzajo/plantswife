import React from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom';
import PlantButtons from "../SharedComponents/PlantButtons/PlantButtons";
import PlantPhoto from "../SharedComponents/PlantPhoto/PlantPhoto";
import GoHomeButton from "../SharedComponents/GoHomeButton/GoHomeButton";
import EditablePlantFullDescription from "./EditablePlantFullDescription/EditablePlantFullDescription";
import PlantFullDescription from "./PlantFullDescription/PlantFullDescription";
import '../SharedComponents/PlantShortDescription/plantShortDescription.scss';
import './plantPage.scss';

class PlantPage extends React.Component {
    state = {
        plantById: {},
        loaded: false,
        redirectToHome: false,
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

    componentDidMount() {
        this.fetchPlant();
    }


    handleEditButton = () => {
        this.setState({
            isEditOn: true
        })
    }

    submitUpdatedPlantForm = (plant) => {
        axios.put(`plants/${plant.id}`, {...plant})
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

    handleDeletePlantButton = () => {
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

    render() {
        const {redirectToHome} = this.state;

        if (redirectToHome) {
            return <Redirect to="/"/>
        }

        if (this.state.loaded) {
            return (
                <div className="plantViewPageBody">
                    <PlantPhoto
                        fullDescriptionView={true}
                        allowAddNewPlantPhoto={true}
                        plant={this.state.plantById}
                        isEditOn={this.state.isEditOn}
                    />
                    {this.state.isEditOn ?
                        <EditablePlantFullDescription
                            plant={this.state.plantById}
                            handleCancelButton={this.handleCancelButton}
                            submitUpdatedPlantForm={this.submitUpdatedPlantForm}
                        />
                        :
                        <div>
                            <PlantButtons plantId={this.state.plantById.id}
                                          fullDescriptionView={true}
                                          plantProcessTriggered={() => this.fetchPlant()}/>
                            <PlantFullDescription
                                plant={this.state.plantById}
                                handleEditButton={this.handleEditButton}
                                handleDeletePlantButton={this.handleDeletePlantButton}
                            />
                        </div>
                    }
                    <GoHomeButton/>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default PlantPage;