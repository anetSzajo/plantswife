import React from "react";
import './placeTile.scss';

class PlaceTile extends React.Component{
    handleClick = () => {

    }
    render(){
        return (
            <button className="findByPlaceTile" onClick={this.handleClick}>
                <img src={this.props.img} alt=""/>
                <p>{this.props.name}</p>
            </button>
        )
    }
}

export default PlaceTile;