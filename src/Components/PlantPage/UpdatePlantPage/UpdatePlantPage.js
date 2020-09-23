import React from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';

import PlantButtons from "../../SharedComponents/PlantButtons/PlantButtons";
import PlantPhoto from "../../SharedComponents/PlantPhoto/PlantPhoto";
import PlantShortDescription from "../../SharedComponents/PlantShortDescription/PlantShortDescription";
import AddNewPlantPhoto from "./../AddNewPlantPhoto/AddNewPlantPhoto";
import GoHomeButton from "../../SharedComponents/GoHomeButton/GoHomeButton";
import '../../SharedComponents/PlantShortDescription/plantShortDescription.scss';
import '../plantPage.scss';
import {defaultDateFormat} from "../../NewPlantPage/NewPlantPage";
import DatePicker from "react-datepicker";
import CustomInput from "../../NewPlantPage/CustomInput/CustomInput";

const moment = require('moment');

class UpdatePlantPage extends React.Component {

    state = {
        plantById: {}
    }

    // fetchPlant = () => {
    //     const plantId = this.props.match.params.plantid;
    //
    //     axios.get(`plants/${plantId}`)
    //         .then(res => this.setState({
    //             plantById: res.data,
    //             loaded: true
    //         }))
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }
    //
    // componentDidMount(){
    //     this.fetchPlant();
    // }

    // handleEditButton = () => {
    //     // const plantId = this.state.plantById.id;
    //
    //     axios.put(`plants/${this.state.plantById.id}`,
    //         {},{ headers: { 'Content-Type': 'application/json' }})
    //         .then(res => this.fetchPlant())
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }


    formatIntervalString = (string) => {
        return string.replace(/([a-zA-Z])(?=[A-Z])/g, '$1 ').toLowerCase();
    }

    handleInput = (event) => {
        this.setState({
                plantById: {
                    ...this.state.plantById,
                    [event.target.name]: event.target.value
                }
            }
        );
        console.log(this.state.plantById)
    }

    render(){
        const plantById = this.props;

        return (
            <div className="plantViewPageBody">
                <PlantPhoto fullDescriptionView={true}/>
                <AddNewPlantPhoto/>
                <PlantButtons plantId={this.state.plantById.id}
                              fullDescriptionView={true}
                              plantProcessTriggered={this.fetchPlant}/>

                <div className="plantFullDescription">

                    <PlantShortDescription plant={this.state.plantById}/>

                    <div className="plantDescription">
                        <div className="row">
                            <div  className="column first">Watering interval:</div>
                            <div className="column">
                                <select value={plantById.wateringInterval} name="wateringInterval" onChange={this.handleInput} >
                                    <option value=''>Choose an option...</option>
                                    <option value="everyday">Everyday</option>
                                    <option value="onceAWeek">Once a week</option>
                                    <option value="twiceAWeek">Twice a week</option>
                                    <option value="threeTimesAWeek">Three times a week</option>
                                    <option value="onceAMonth">Once a month</option>
                                </select>
                                {this.formatIntervalString(this.state.plantById.watering.interval)}
                            </div>
                        </div>
                        <div className="row">
                            <div  className="column first">
                                Last watering:
                            </div>
                            <div className="column">
                                <DatePicker selected={this.state.plantById.lastWatering}
                                            onChange={(date) => this.handleDateChange(date, "lastWatering")}
                                            name="lastWatering"
                                            placeholderText="Select date and time"
                                            maxDate={new Date()}
                                            dateFormat={defaultDateFormat}
                                            showTimeSelect
                                            popperPlacement="bottom"
                                            customInput={<CustomInput />}
                                />
                                {moment(this.state.plantById.watering.lastTimeProcessed).format(defaultDateFormat)}
                            </div>
                        </div>
                        <div className="row">
                            <div  className="column first">Spraing interval:</div>
                            <div className="column">
                                <select value={plantById.spraingInterval} name="spraingInterval" onChange={this.handleInput}>
                                    <option value=''>Choose an option...</option>
                                    <option value="everyday">Everyday</option>
                                    <option value="onceAWeek">Once a week</option>
                                    <option value="twiceAWeek">Twice a week</option>
                                    <option value="threeTimesAWeek">Three times a week</option>
                                    <option value="onceAMonth">Once a month</option>
                                </select>
                                {this.formatIntervalString(this.state.plantById.spraing.interval)}
                            </div>
                        </div>
                        <div className="row">
                            <div  className="column first">Last spraing:</div>
                            <div className="column">{
                                moment(this.state.plantById.spraing.lastTimeProcessed).format(defaultDateFormat)}
                            </div>
                        </div>
                        <div className="row">
                            <div  className="column first">Feeding interval:</div>
                            <div className="column">
                                {this.formatIntervalString(this.state.plantById.feeding.interval)}
                            </div>
                        </div>
                        <div className="row">
                            <div  className="column first">Last feeding:</div>
                            <div className="column">
                                {moment(this.state.plantById.feeding.lastTimeProcessed).format(defaultDateFormat)}
                            </div>
                        </div>
                        <div className="row">
                            <div  className="column first">Notes:</div>
                            <div className="column">
                                {this.state.plantById.notes}
                            </div>
                        </div>

                    </div>
                </div>
                <GoHomeButton/>
            </div>
        )
}
}

export default UpdatePlantPage;