import React from "react";
import PlantButtons from "../SharedComponents/PlantButtons/PlantButtons";
import PlantPhoto from "../SharedComponents/PlantPhoto/PlantPhoto";
import './plantPage.scss';
import PlantShortDescription from "../SharedComponents/PlantShortDescription/PlantShortDescription";

class PlantPage extends React.Component {
    state = {
        plant: {}
    }
    componentDidMount(){
        const plantId = this.props.match.params.plantid;

        fetch('/databaseFull.json')
            .then(response => response.json())
            .then(data => this.setState({
                    plant: data.filter(plant => ''+plant.id === plantId)[0]
                }))

            .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                <div className="plantViewPageBody">
                    <PlantPhoto fullDescriptionView={true}/>
                    <PlantButtons fullDescriptionView={true}/>
                    <PlantShortDescription plant={this.state.plant}/>
                    <button className="deleteButton">
                        <img src="/icons/trash.png" alt="" />
                    </button>
                </div>
            </div>
        )
    }
}

export default PlantPage;