import React from 'react';

import GoHomeButton from "../SharedComponents/GoHomeButton/GoHomeButton";
import './newPlantPage.scss';

const moment = require('moment');

class NewPlantPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plant: props.plant ? props.plant : this.defaultEmptyPlant()
        }
    }

    defaultEmptyPlant = () => ({
        name: '',
        wateringInterval: '',
        lastWatering: '',
        nextWatering: '',
        spraingInterval: '',
        lastSpraing: '',
        nextSpraing: '',
        feedingInterval: '',
        lastFeeding: '',
        nextFeeding: '',
        place: '',
        notes: ''
    })

    handleInput = (event) => {
        this.setState({
                plant: {
                    ...this.state.plant,
                    [event.target.name]: event.target.value
                }
            }, () => this.calculateNextWatering(this.state.plant.lastWatering
            , this.state.plant.wateringInterval)
        )
    }


    calculateNextWatering = (lastWatering, wateringInterval) => {
        let nextWatering;

        if (wateringInterval === "everyDay"){
            nextWatering = moment(lastWatering).add(1, 'd');
        }
        else if (wateringInterval === "onceAWeek"){
            nextWatering = moment(lastWatering).add(1, 'w');
        }
        else if (wateringInterval === "twiceAWeek"){
            nextWatering = moment(lastWatering).add(3, 'd');
        }
        else if (wateringInterval === "threeTimesAWeek"){
            nextWatering = moment(lastWatering).add(2, 'd');
        }
        else if (wateringInterval === "onceAMonth"){
            nextWatering = moment(lastWatering).add(1, 'M');
        }

        console.log('This is next: ' + nextWatering);

        this.setState({
            plant: {
                ...this.state.plant,
                nextWatering: nextWatering
            }
        })
    }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //
    //     // const plant = this.state.plant;
    //     //
    //     // axios.post('',
    //     //     {...plant},{ headers: { 'Content-Type': 'application/json' } } )
    //     //     .then(res => {
    //     //         console.log(res);
    //     //         console.log(plant);
    //     //     })
    // }


    render() {
        const {plant} = this.state;

        return (
            <div className="newPlantFormPage">
                <div>
                    <h1>NEW PLANT FORM</h1>
                    <form className="newPlantForm" onSubmit={this.handleSubmit}>
                        <label>Name: </label>
                        <input type="text" name="name" value={plant.name} onChange={this.handleInput}/>
                        <label>Watering interval:</label>
                        <select value={plant.wateringInterval} name="wateringInterval" onChange={this.handleInput}>
                            <option value="everyDay">Every day</option>
                            <option value="onceAWeek">Once a week</option>
                            <option value="twiceAWeek">Twice a week</option>
                            <option value="threeTimesAWeek">Three times a week</option>
                            <option value="onceAMonth">Once a month</option>
                        </select>
                        <p>NextWatering: {this.state.nextWatering}</p>
                        <label>Last watering:</label>
                        <input type="datetime-local" name="lastWatering" value={plant.lastWatering}
                               onChange={this.handleInput}/>
                        <label>Spraing interval:</label>
                        <select value={plant.spraingInterval} name="spraingInterval" onChange={this.handleInput}>
                            <option value="everyDay">Every day</option>
                            <option value="onceAWeek">Once a week</option>
                            <option value="twiceAWeek">Twice a week</option>
                            <option value="threeTimesAWeek">Three times a week</option>
                            <option value="onceAMonth">Once a month</option>
                        </select>
                        <label>Last spraing:</label>
                        <input type="date" name="lastSpraing" value={plant.lastSpraing}
                               onChange={this.handleInput}/>
                        <label>Feeding interval:</label>
                        <select value={plant.feedingInterval} name="feedingInterval" onChange={this.handleInput}>
                            <option value="everyDay">Every day</option>
                            <option value="onceAWeek">Once a week</option>
                            <option value="twiceAWeek">Twice a week</option>
                            <option value="threeTimesAWeek">Three times a week</option>
                            <option value="onceAMonth">Once a month</option>
                        </select>
                        <label>Last feeding:</label>
                        <input type="date" name="lastFeeding" value={plant.lastFeeding}
                               onChange={this.handleInput}/>
                        <label>Place:</label>
                        <input type="text" name="place" value={plant.place} onChange={this.handleInput}/>
                        <label>Notes:</label>
                        <textarea name="notes" value={plant.notes} onChange={this.handleInput}/>
                        <input type="submit" value="SUBMIT" className="submit-button"/>
                        <GoHomeButton/>
                    </form>
                    {console.log(plant)}
                </div>
            </div>
        )
    }
}

export default NewPlantPage;