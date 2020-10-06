import React from "react";
import './placeTile.scss';
import axios from "axios";
import {AuthContext} from "../../../Context/auth";

class PlaceTile extends React.Component{

    state = {
        filteredPlants: []
    }

    static contextType = AuthContext;

    handleClick = (filteredPlace) => {
        axios.get(`plants`,
            {
                headers:
                    {
                        Authorization: `Bearer ${this.context.authTokens.access_token}`
                    }
            })
            .then(res => this.setState({
                filteredPlants: res.data.filter(plant => plant.place === filteredPlace)
            }))
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        return (
            <button className="findByPlaceTile" onClick={() => this.handleClick(this.props.filteredPlace)}>
                <img src={this.props.img} alt=""/>
                <p>{this.props.name}</p>
            </button>
        )
    }
}

export default PlaceTile;