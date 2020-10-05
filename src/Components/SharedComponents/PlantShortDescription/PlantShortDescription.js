import React from 'react';
import './plantShortDescription.scss';
import {defaultDateFormat} from "../Common";

const moment = require('moment');

function PlantShortDescription({ plant }){
    return(
            <div className="plantDescription">
                <div className="row">
                    <div className="column first">Id:</div>
                    <div className="column">{plant.id}</div>
                </div>
                <div className="row">
                    <div className="column first">Name:</div>
                    <div className="column">{plant.name}</div>
                </div>
                <div className="row">
                    <div className="column first">Next watering:</div>
                    <div className="column">{moment(plant.watering.nextTimeProcessed).format(defaultDateFormat)}</div>
                </div>
                <div className="row">
                    <div className="column first">Next feeding:</div>
                    <div className="column">{moment(plant.spraing.nextTimeProcessed).format(defaultDateFormat)}</div>
                </div>
                <div className="row">
                    <div className="column first">Next spraing:</div>
                    <div className="column">{moment(plant.feeding.nextTimeProcessed).format(defaultDateFormat)}</div>
                </div>
                <div className="row">
                    <div className="column first">Place:</div>
                    <div className="column">{plant.place}</div>
                </div>
            </div>
    )
}

export default PlantShortDescription;