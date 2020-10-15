import React from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import {Redirect} from "react-router-dom";
import CreateNewPlantDto, {intervalsMap} from './CreateNewPlantDto';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';

import "react-datepicker/dist/react-datepicker.css";
import GoHomeButton from "../SharedComponents/GoHomeButton/GoHomeButton";
import CustomInput from "./CustomInput/CustomInput";
import './newPlantPage.scss';
import {AuthContext} from "../../Context/auth";

const moment = require('moment');

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class NewPlantPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plant: props.plant ? props.plant : this.defaultEmptyPlant(),
            redirectToHome: false,
            open: false
        };
    }

    static contextType = AuthContext;

    handleClick = () => this.setState({ open: true })

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ open: false })
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
        date = moment(date).format();

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

        nextAction = moment(previousAction).add(interval[0], interval[1]).format();

        return nextAction;
    }

    checkAction = (plant) => {
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

    handleSubmit = (event) => {
        event.preventDefault();

        const plant = CreateNewPlantDto.fromNewPlantForm(this.state.plant);

        axios.post(`${process.env.REACT_APP_AXIOS_URL}/plants`,
            {...plant},{
            headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.context.authTokens.access_token}`
            }})
            .then(res => {
                console.log(res);
                console.log(plant);
            })
            .then(res => this.setState(
                {
                    redirectToHome: true
                }
            ))
            .catch(error => {
                this.handleClick();
                console.log(error)
            })
    }


    render() {
        const {plant} = this.state;
        const {open} = this.state;
        const { redirectToHome } = this.state;

        if (redirectToHome) {
            return <Redirect to="/" />
        }

        return (
            <div className="newPlantFormPage">

                <Snackbar open={open} autoHideDuration={6000} onClose={this.handleClose} anchorOrigin={{vertical: "top", horizontal: "center"}}>
                    <Alert onClose={this.handleClose} severity="warning">
                        Please fill all fields and submit.
                    </Alert>
                </Snackbar>
                <div>
                    <h1>NEW PLANT FORM</h1>
                    <form className="newPlantForm" onSubmit={this.handleSubmit}>
                        <label>Name: </label>
                        <input
                            type="text"
                            name="name"
                            value={plant.name}
                            onChange={this.handleInput}
                        />
                        <label>Watering interval:</label>
                        <select value={plant.wateringInterval} name="wateringInterval" onChange={this.handleInput} >
                            <option value=''>Choose an option...</option>
                            <option value="everyday">Everyday</option>
                            <option value="onceAWeek">Once a week</option>
                            <option value="twiceAWeek">Twice a week</option>
                            <option value="threeTimesAWeek">Three times a week</option>
                            <option value="onceAMonth">Once a month</option>
                        </select>
                        <label>Last watering:</label>
                        <DatePicker selected={Date.parse(this.state.plant.lastWatering)}
                                    onChange={(date) => this.handleDateChange(date, "lastWatering")}
                                    name="lastWatering"
                                    placeholderText="Select date and time"
                                    maxDate={new Date()}
                                    dateFormat="MM/dd/yyyy HH:mm"
                                    showTimeSelect
                                    popperPlacement="bottom"
                                    customInput={<CustomInput calendarIcon="true"  />}
                            />
                        <label>NextWatering:</label>
                        <p>{this.state.plant.nextWatering}</p>
                        <label>Spraing interval:</label>
                        <select value={plant.spraingInterval} name="spraingInterval" onChange={this.handleInput}>
                            <option value=''>Choose an option...</option>
                            <option value="everyday">Everyday</option>
                            <option value="onceAWeek">Once a week</option>
                            <option value="twiceAWeek">Twice a week</option>
                            <option value="threeTimesAWeek">Three times a week</option>
                            <option value="onceAMonth">Once a month</option>
                        </select>
                        <label>Last spraing:</label>
                        <DatePicker selected={Date.parse(this.state.plant.lastSpraing)}
                                    onChange={(date) => this.handleDateChange(date, "lastSpraing")}
                                    name="lastSpraing"
                                    placeholderText="Select date and time"
                                    maxDate={new Date()}
                                    dateFormat="MM/dd/yyyy HH:mm"
                                    showTimeSelect
                                    popperPlacement="bottom"
                                    customInput={<CustomInput calendarIcon="true" />}
                            />
                        <label>Next spraing::</label>
                        <p>{this.state.plant.nextSpraing}</p>
                        <label>Feeding interval:</label>
                        <select value={plant.feedingInterval} name="feedingInterval" onChange={this.handleInput}>
                            <option value=''>Choose an option...</option>
                            <option value="everyday">Everyday</option>
                            <option value="onceAWeek">Once a week</option>
                            <option value="twiceAWeek">Twice a week</option>
                            <option value="threeTimesAWeek">Three times a week</option>
                            <option value="onceAMonth">Once a month</option>
                        </select>
                        <label>Last feeding:</label>
                         <DatePicker selected={Date.parse(this.state.plant.lastFeeding)}
                                     onChange={(date) => this.handleDateChange(date, "lastFeeding")}
                                     name="lastFeeding"
                                     placeholderText="Select date and time"
                                     maxDate={new Date()}
                                     dateFormat="MM/dd/yyyy HH:mm"
                                     showTimeSelect
                                     popperPlacement="bottom"
                                     customInput={<CustomInput calendarIcon="true" />}
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
                        <label>Notes: </label>
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