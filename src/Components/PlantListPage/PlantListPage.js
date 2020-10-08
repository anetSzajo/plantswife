import React from "react";
import PlantsList from './PlantsList/PlantsList';
import axios from 'axios';
import {AuthContext} from "../../Context/auth";

class PlantListPage extends React.Component{

    state = {
        plants: []
    }

    static contextType = AuthContext;

    fetchPlants = () => {
        axios.get(`plants`, {
            headers:
                {
                    Authorization: `Bearer ${this.context.authTokens.access_token}`
                }
        })
            .then(res => this.setState({
                plants: res.data
            }))
            .catch(error => {
                console.log(error)
            })
    }

    fetchPlantsByPlace = (filterPlace) => {
        axios.get(`plants`, {
            headers:
                {
                    Authorization: `Bearer ${this.context.authTokens.access_token}`
                }
        })
            .then(res => this.setState({
                            plants: res.data.filter(plant => plant.place === filterPlace)
                        }))
            .catch(error => {
                console.log(error)
            })
    }

    checkFetching = () => {
        if (this.props.filterByPlace){
            this.fetchPlantsByPlace(this.props.place)
        } else {
            this.fetchPlants()
        }
    }

    componentDidMount(){
        this.checkFetching()
    }

    render(){
        const { plants } = this.state;
        return(
            <PlantsList plants={plants} plantProcessTriggered={this.checkFetching} />
        )
    }
}

export default PlantListPage;