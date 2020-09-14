import React from "react";
import PlantsList from './PlantsList/PlantsList';
import axios from 'axios';

class PlantListPage extends React.Component{
    state = {
        plants: []
    }


    fetchPlants = () => {
        axios.get(`plants`)
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