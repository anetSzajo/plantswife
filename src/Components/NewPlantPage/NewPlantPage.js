import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GoHomeButton from "../SharedComponents/GoHomeButton/GoHomeButton";
import CustomInput from "./CustomInput/CustomInput";
import './newPlantPage.scss';

const moment = require('moment');

class NewPlantPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plant: props.plant ? props.plant : this.defaultEmptyPlant(),
        };

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

    handleDateChange = (date, name) => {

        this.setState({
            plant: {
                ...this.state.plant,
                [name]: date
            }
        }, () => this.checkAction(this.state.plant)
        )
    }

    handleInput = (event) => {
        this.setState({
                plant: {
                    ...this.state.plant,
                    [event.target.name]: event.target.value
                }
            }, () => this.checkAction(this.state.plant)
        )
    }

    calculateNextAction = (previousAction, interval) => {
        let nextAction;

        if (previousAction && interval) {
            if (interval === "everyDay") {
                nextAction = moment(previousAction).add(1, 'd').format("DD/MM/YYYY, hh:mm");
            } else if (interval === "onceAWeek") {
                nextAction = moment(previousAction).add(1, 'w').format("DD/MM/YYYY, hh:mm");
            } else if (interval === "twiceAWeek") {
                nextAction = moment(previousAction).add(3, 'd').format("DD/MM/YYYY, hh:mm");
            } else if (interval === "threeTimesAWeek") {
                nextAction = moment(previousAction).add(2, 'd').format("DD/MM/YYYY, hh:mm");
            } else if (interval === "onceAMonth") {
                nextAction = moment(previousAction).add(1, 'M').format("DD/MM/YYYY, hh:mm");
            }
        }
        return nextAction;
    }

    checkAction = (plant) => {
        if (plant.lastWatering && plant.wateringInterval){
            let nextWatering = this.calculateNextAction(plant.lastWatering, plant.wateringInterval);
            this.setState({
                plant: {
                    ...this.state.plant,
                    nextWatering: nextWatering
                }
            })
        }
        if (plant.lastSpraing && plant.spraingInterval){
            let nextSpraing = this.calculateNextAction(plant.lastSpraing, plant.spraingInterval);
            this.setState({
                plant: {
                    ...this.state.plant,
                    nextSpraing: nextSpraing
                }
            })
        }
        if (plant.lastFeeding && plant.feedingInterval){
            let nextFeeding = this.calculateNextAction(plant.lastFeeding, plant.feedingInterval);
            this.setState({
                plant: {
                    ...this.state.plant,
                    nextFeeding: nextFeeding
                }
            })
        }
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
                        <select value={plant.wateringInterval} name="wateringInterval" onChange={this.handleInput} >
                            <option value=''>Choose an option...</option>
                            <option value="everyDay">Every day</option>
                            <option value="onceAWeek">Once a week</option>
                            <option value="twiceAWeek">Twice a week</option>
                            <option value="threeTimesAWeek">Three times a week</option>
                            <option value="onceAMonth">Once a month</option>
                        </select>
                        <label>Last watering:</label>
                        <DatePicker selected={this.state.plant.lastWatering}
                                    onChange={(date) => this.handleDateChange(date, "lastWatering")}
                                    name="lastWatering"
                                    placeholderText="Select date and time"
                                    maxDate={new Date()}
                                    dateFormat={"dd/MM/yyyy hh:mm"}
                                    showTimeSelect
                                    popperPlacement="bottom"
                                    customInput={<CustomInput />}
                            />
                        <label>NextWatering:</label>
                        <p>{this.state.plant.nextWatering}</p>
                        <label>Spraing interval:</label>
                        <select value={plant.spraingInterval} name="spraingInterval" onChange={this.handleInput}>
                            <option value=''>Choose an option...</option>
                            <option value="everyDay">Every day</option>
                            <option value="onceAWeek">Once a week</option>
                            <option value="twiceAWeek">Twice a week</option>
                            <option value="threeTimesAWeek">Three times a week</option>
                            <option value="onceAMonth">Once a month</option>
                        </select>
                        <label>Last spraing:</label>
                        <DatePicker selected={this.state.plant.lastSpraing}
                                    onChange={(date) => this.handleDateChange(date, "lastSpraing")}
                                    name="lastSpraing"
                                    placeholderText="Select date and time"
                                    maxDate={new Date()}
                                    dateFormat={"dd/MM/yyyy hh:mm"}
                                    showTimeSelect
                                    popperPlacement="bottom"
                                    customInput={<CustomInput />}
                            />
                        <label>Next spraing::</label>
                        <p>{this.state.plant.nextSpraing}</p>
                        <label>Feeding interval:</label>
                        <select value={plant.feedingInterval} name="feedingInterval" onChange={this.handleInput}>
                            <option value=''>Choose an option...</option>
                            <option value="everyDay">Every day</option>
                            <option value="onceAWeek">Once a week</option>
                            <option value="twiceAWeek">Twice a week</option>
                            <option value="threeTimesAWeek">Three times a week</option>
                            <option value="onceAMonth">Once a month</option>
                        </select>
                        <label>Last feeding:</label>
                         <DatePicker selected={this.state.plant.lastFeeding}
                                     onChange={(date) => this.handleDateChange(date, "lastFeeding")}
                                     name="lastFeeding"
                                     placeholderText="Select date and time"
                                     maxDate={new Date()}
                                     dateFormat={"dd/MM/yyyy hh:mm"}
                                     showTimeSelect
                                     popperPlacement="bottom"
                                     customInput={<CustomInput />}
                                 />
                        <label>Next feeding:</label>
                        <p>{this.state.plant.nextFeeding}</p>
                        <label>Place:</label>
                        <select value={plant.place} name="place" onChange={this.handleInput}>
                            <option value=''>Choose a place..</option>
                            <option value="livingRoom">Living room</option>
                            <option value="diningRoom">Dining room</option>
                            <option value="bedroom">Bedroom</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="hall">Hall</option>
                            <option value="balcony">Balcony</option>
                        </select>
                        <label>Notes:</label>
                        <textarea name="notes" value={plant.notes} onChange={this.handleInput} placeholder="Put your notes here..."/>
                        <input type="submit" value="SUBMIT" className="submit-button"/>
                        <GoHomeButton />
                    </form>
                    {console.log(plant)}
                </div>
            </div>
        )
    }
}

export default NewPlantPage;