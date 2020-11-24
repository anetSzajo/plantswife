import React from "react";

import {defaultDateFormat, formatIntervalString} from '../../SharedComponents/Common';
import DeletePlantButton from "../DeletePlantButton/DeletePlantButton";
import '../../SharedComponents/PlantShortDescription/plantShortDescription.scss';
import './plantFullDescription.scss';
import 'react-confirm-alert/src/react-confirm-alert.css';


const moment = require('moment');

class PlantFullDescription extends React.Component {
    render() {
        const {plant} = this.props;

        return (
            <div className="plantFullDescription">
                <div className="plantDescription">
                    <div className="row">
                        <div className="column first">Id:</div>
                        <div className="column">{plant.id}</div>
                    </div>
                    <div className="row">
                        <div className="column first">Name:</div>
                        <div className="column">
                            {plant.name}
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Next watering:</div>
                        <div className="column">
                            {moment(plant.watering.nextTimeProcessed).format(defaultDateFormat)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Next spraing:</div>
                        <div className="column">
                            {moment(plant.spraing.nextTimeProcessed).format(defaultDateFormat)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Next feeding:</div>
                        <div className="column">
                            {moment(plant.feeding.nextTimeProcessed).format(defaultDateFormat)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Place:</div>
                        <div className="column">
                            {formatIntervalString(plant.place)}
                        </div>
                    </div>
                </div>
                <div className="plantDescription">
                    <div className="row">
                        <div className="column first">Watering interval:</div>
                        <div className="column">
                            {formatIntervalString(plant.watering.interval)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">
                            Last watering:
                        </div>
                        <div className="column dateInputColumn">
                            <div className="column">
                                {moment(plant.watering.lastTimeProcessed).format(defaultDateFormat)}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Spraing interval:</div>
                        <div className="column">
                            {formatIntervalString(plant.spraing.interval)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Last spraing:</div>
                        <div className="column">
                            {moment(plant.spraing.lastTimeProcessed).format(defaultDateFormat)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Feeding interval:</div>
                        <div className="column">
                            {formatIntervalString(this.props.plant.feeding.interval)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Last feeding:</div>
                        <div className="column">
                            {moment(plant.feeding.lastTimeProcessed).format(defaultDateFormat)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Notes:</div>
                        <div className="column">
                            {plant.notes}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="buttonsContainer">
                        <button className="editButton" onClick={this.props.handleEditButton}>
                            <img src="/icons/edit-icon.png" alt=""/>
                        </button>
                        <DeletePlantButton handleDeletePlantButton={this.props.handleDeletePlantButton}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlantFullDescription;