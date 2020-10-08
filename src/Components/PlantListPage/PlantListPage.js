import React from "react";
import PlantsList from './PlantsList/PlantsList';
import axios from 'axios';
import {AuthContext} from "../../Context/auth";

class PlantListPage extends React.Component {

    state = {
        plants: []
    }

    static contextType = AuthContext;

    fetchPlants = (place) => {
        axios.get(`plants`, {
            headers:
                {
                    Authorization: `Bearer ${this.context.authTokens.access_token}`
                }
        })
            .then(res => {
                    if (place) {
                        this.setState({
                            plants: res.data.filter(plant => plant.place === place)
                        })
                    } else {
                        this.setState({
                            plants: res.data
                        })
                    }
                }
            )
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.fetchPlants(this.props.place)
    }

    render() {
        const {plants} = this.state;
        return (
            <PlantsList plants={plants} plantProcessTriggered={() => this.fetchPlants(this.props.place)}/>
        )
    }
}

export default PlantListPage;