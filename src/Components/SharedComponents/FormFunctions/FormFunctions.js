import React from 'react';

import {intervalsMap} from "../../NewPlantPage/CreateNewPlantDto";
import {defaultDateFormat} from "../../NewPlantPage/NewPlantPage";

const moment = require('moment');

export const handleDateChange = (date, name) => {
    this.setState({
            plant: {
                ...this.state.plant,
                [name]: date
            }
        }, () => this.checkAction(this.state.plant)
    )
}

export const handleInput = (event) => {
    this.setState({
            plant: {
                ...this.state.plant,
                [event.target.name]: event.target.value
            }
        }, () => this.checkAction(this.state.plant)
    )
}

export function calculateNextAction(previousAction, interval){
    let nextAction;

    nextAction = moment(previousAction).add(interval[0], interval[1]).format(defaultDateFormat);

    return nextAction;
}

export function checkAction(plant){
    if (plant.lastWatering && plant.wateringInterval){
        let nextWatering = this.calculateNextAction(plant.lastWatering, intervalsMap.get(this.state.plant.wateringInterval));
        this.setState({
            plant: {
                ...this.state.plant,
                nextWatering: nextWatering
            }
        })
    }
    if (plant.lastSpraing && plant.spraingInterval){
        let nextSpraing = this.calculateNextAction(plant.lastSpraing, intervalsMap.get(this.state.plant.spraingInterval));
        this.setState({
            plant: {
                ...this.state.plant,
                nextSpraing: nextSpraing
            }
        })
    }
    if (plant.lastFeeding && plant.feedingInterval){
        let nextFeeding = this.calculateNextAction(plant.lastFeeding, intervalsMap.get(this.state.plant.feedingInterval));
        this.setState({
            plant: {
                ...this.state.plant,
                nextFeeding: nextFeeding
            }
        })
    }
}