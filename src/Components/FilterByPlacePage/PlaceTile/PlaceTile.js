import React from "react";
import { Redirect } from "react-router-dom";


import './placeTile.scss';

class PlaceTile extends React.Component {

    state = {
        filterByPlace: false
    }

    handleClick = () => {
        this.setState(
            {
                filterByPlace: true
            }
        )
    }

    render() {
        if (this.state.filterByPlace) {
              return <Redirect to={{
                  pathname: '/',
                  state: {
                      place: this.props.place,
                      filterByPlace: true
                  }
              }} />
             }
         else{
             return (
                <button className="findByPlaceTile" onClick={this.handleClick}>
                       <img src={this.props.img} alt=""/>
                      <p>{this.props.name}</p>
                  </button>
            )
          }
    }
}

export default PlaceTile;

