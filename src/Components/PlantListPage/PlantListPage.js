import React from "react";
import PlantsList from './PlantsList/PlantsList';
import axios from 'axios';

class PlantListPage extends React.Component{
    state = {
        plants: []
    }

    componentDidMount(){
        axios.get(`plants`)
            .then(res => this.setState({
                plants: res.data
            }))
            .catch(error => {
                console.log(error)
            })

        // fetch('/database.json')
        //     .then(response => response.json())
        //     .then(data => this.setState({
        //             plants: data
        //         })
        //
        //     )
    }

    render(){
        const { plants } = this.state;
        return(
            <PlantsList plants={plants} />
        )
    }
}

export default PlantListPage;