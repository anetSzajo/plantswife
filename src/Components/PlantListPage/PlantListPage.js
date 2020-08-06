import React from "react";
import PlantsList from './PlantsList/PlantsList';

class PlantListPage extends React.Component{
    state = {
        plants: []
    }

    componentDidMount(){
        fetch('/database.json')
            .then(response => response.json())
            .then(data => this.setState({
                    plants: data
                })

            )
    }

    render(){
        const { plants } = this.state;
        return(
            <PlantsList plants={plants} />
        )
    }
}

export default PlantListPage;