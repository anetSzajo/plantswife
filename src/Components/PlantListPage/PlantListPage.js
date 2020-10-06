import React, {useContext, useState} from "react";
import PlantsList from './PlantsList/PlantsList';
import axios from 'axios';
import {AuthContext, useAuth} from "../../Context/auth";



class PlantListPage extends React.Component{
    state = {
        plants: []
    }

    static contextType = AuthContext;

    fetchPlants = () => {
        console.log(this.context)
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
    componentDidMount(){
        this.fetchPlants()
    }

    render(){
        const { plants } = this.state;
        return(
            <PlantsList plants={plants} plantProcessTriggered={this.fetchPlants} />
        )
    }
}

export default PlantListPage;