import React from 'react';

import GoHomeButton from "../SharedComponents/GoHomeButton/GoHomeButton";
import './newPlantPage.scss';

class NewPlantPage extends React.Component{
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
        spraingInterval: '',
        lastSpraing: '',
        feedingInterval: '',
        lastFeeding: '',
        place: '',
        notes: ''
    })

    handleInput = (event) => {
        this.setState({
            plant: {
                ...this.state.plant,
                [event.target.name]: event.target.value
            }
        })
    }

    render(){
        const { plant } = this.state;

        return(
            <div className="newPlantFormPage">
                <div>
                    <h1>NEW PLANT FORM</h1>
                    <div className="newPlantForm">
                        <label>Name: </label>
                        <input type="text" name="name" value={plant.name} onChange={this.handleInput}/>
                        <label>Watering interval:</label>
                        <select value={plant.wateringInterval} onChange={this.handleInput}>
                            <option value="everyDay">Every day</option>
                            <option value="onceAWeek">Once a week</option>
                            <option value="twicePerWeek">Twice a week</option>
                            <option value="threeTimesAWeek">Three times a week</option>
                            <option value="onceAMonth">Once a month</option>
                        </select>
                        <label>Last watering:</label>
                        <input type="date" name="lastWatering" value={plant.lastWatering} onChange={this.handleInput}/>
                        <label>Spraing interval:</label>
                        <select value={plant.spraingInterval} onChange={this.handleInput}>
                            <option value="everyDay">Every day</option>
                            <option value="onceAWeek">Once a week</option>
                            <option value="twicePerWeek">Twice a week</option>
                            <option value="threeTimesAWeek">Three times a week</option>
                            <option value="onceAMonth">Once a month</option>
                        </select>
                        <label>Last spraing:</label>
                        <input type="date" name="lastSpraing" value={plant.lastSpraing} onChange={this.handleInput}/>
                        <label>Feeding interval:</label>
                        <select value={plant.feedingInterval} onChange={this.handleInput}>
                            <option value="everyDay">Every day</option>
                            <option value="onceAWeek">Once a week</option>
                            <option value="twicePerWeek">Twice a week</option>
                            <option value="threeTimesAWeek">Three times a week</option>
                            <option value="onceAMonth">Once a month</option>
                        </select>
                        <label>Last feeding:</label>
                        <input type="date" name="lastFeeding" value={plant.lastFeeding} onChange={this.handleInput}/>
                        <label>Place:</label>
                        <input type="text" name="place" value={plant.place} onChange={this.handleInput}/>
                        <label>Notes:</label>
                        <textarea name="notes" value={plant.notes} onChange={this.handleInput}/>
                        <button type="submit" className="submitButton">SUBMIT</button>
                        <GoHomeButton />
                    </div>
                    {console.log(plant)}
                </div>
            </div>
        )
    }
}

export default NewPlantPage;