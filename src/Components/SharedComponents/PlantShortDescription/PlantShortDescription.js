import React from 'react';
import { defaultDateFormat } from '../../NewPlantPage/NewPlantPage';
import './plantShortDescription.scss';

const moment = require('moment');

function PlantShortDescription({ plant }){
    return(
            <div className="plantShortDescription">
                <div className="plantShortDescription__column column-first">
                    <p>Id: </p>
                    <p>Name: </p>
                    <p>Next watering: </p>
                    <p>Next feeding: </p>
                    <p>Next spraing: </p>
                    <p>Place: </p>
                </div>
                <div className="plantShortDescription__column">
                    <p>{plant.id}</p>
                    <p>{plant.name}</p>
                    <p>{moment(plant.watering.nextTimeProcessed).format(defaultDateFormat)}</p>
                    <p>{moment(plant.spraing.nextTimeProcessed).format(defaultDateFormat)}</p>
                    <p>{moment(plant.feeding.nextTimeProcessed).format(defaultDateFormat)}</p>
                    <p>{plant.place}</p>
                </div>
            </div>
    )
}

export default PlantShortDescription;