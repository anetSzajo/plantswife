import React from "react";
import DatePicker from "react-datepicker";
import {intervalsMap} from "../../NewPlantPage/CreateNewPlantDto";
import {defaultDateFormat} from "../../SharedComponents/Common";
import CustomInput from "../../NewPlantPage/CustomInput/CustomInput";
import DeletePlantButton from "../DeletePlantButton/DeletePlantButton";
import '../../SharedComponents/PlantShortDescription/plantShortDescription.scss';
import './plantFullDescription.scss';
import 'react-confirm-alert/src/react-confirm-alert.css';


const moment = require('moment');

class PlantFullDescription extends React.Component {
    state = {
        plant: this.props.plant
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.plant !== this.props.plant) {
            this.setState(
                {
                    plant: this.props.plant
                }
            )
        }
    }

    formatIntervalString = (string) => {
        return string.replace(/([a-zA-Z])(?=[A-Z])/g, '$1 ').toLowerCase();
    }

    calculateNextAction = (previousAction, actionInterval) => {
        let nextAction;

        nextAction = moment(previousAction).add(actionInterval[0], actionInterval[1]).format(defaultDateFormat);

        return nextAction;
    }

    updateAction = (data, processName) => {
        let nextAction = this.calculateNextAction(this.state.plant[processName].lastTimeProcessed, intervalsMap.get(this.state.plant[processName].interval));
        this.setState({
            plant: {
                ...this.state.plant,
                [processName]: {
                    ...this.state.plant[processName],
                    nextTimeProcessed: nextAction
                }
            }
        })
    }

    handleProcessDateChange = (date, process) => {
        date = date.toString();

        this.setState({
                plant: {
                    ...this.state.plant,
                    [process]: {
                        ...this.state.plant[process],
                        lastTimeProcessed: date
                    }
                }
            }, () => {
                this.updateAction(this.state.plant, process)
            }
        )
    }

    handleIntervalSelect = (event, process) => {
        this.setState({
                plant: {
                    ...this.state.plant,
                    [event.target.name]: {
                        ...this.state.plant[event.target.name],
                        interval: event.target.value
                    }
                }
            }, () => {
                this.updateAction(this.state.plant, process)
            }
        )
    }

    handleInput = (event) => {
        this.setState({
                plant: {
                    ...this.state.plant,
                    [event.target.name]: event.target.value
                }
            }
        )
    }

    render() {
        const {plant} = this.state;

        return (
            <div className="plantFullDescription">
                <div className="plantDescription">
                    <div className="row">
                        <div className="column first">Id:</div>
                        <div className={this.props.isEditOn ? "editedColumn" : "column"}>{plant.id}</div>
                    </div>
                    <div className="row">
                        <div className="column first">Name:</div>
                        <div className="column">
                            {this.props.isEditOn
                                ?
                                <input type="text" name="name" value={plant.name} onChange={this.handleInput}/>
                                :
                                <div>{plant.name}</div>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Next watering:</div>
                        <div className={this.props.isEditOn ? "editedColumn" : "column"}>
                            {moment(plant.watering.nextTimeProcessed).format(defaultDateFormat)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Next spraing:</div>
                        <div className={this.props.isEditOn ? "editedColumn" : "column"}>
                            {moment(plant.spraing.nextTimeProcessed).format(defaultDateFormat)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Next feeding:</div>
                        <div className={this.props.isEditOn ? "editedColumn" : "column"}>
                            {moment(plant.feeding.nextTimeProcessed).format(defaultDateFormat)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Place:</div>
                        <div className="column">
                            {this.props.isEditOn
                                ?
                                <select value={plant.place} name="place" onChange={this.handleInput}>
                                    <option value="livingRoom">Living room</option>
                                    <option value="diningRoom">Dining room</option>
                                    <option value="bedroom">Bedroom</option>
                                    <option value="kitchen">Kitchen</option>
                                    <option value="hall">Hall</option>
                                    <option value="balcony">Balcony</option>
                                </select>
                                :
                                <div>{this.formatIntervalString(plant.place)}</div>
                            }
                        </div>
                    </div>
                </div>
                <div className="plantDescription">
                    <div className="row">
                        <div className="column first">Watering interval:</div>
                        <div className="column">
                            {this.props.isEditOn
                                ?
                                <select className="column" value={plant.watering.interval}
                                        name="watering"
                                        onChange={(event) => this.handleIntervalSelect(event, "watering")}>
                                    <option value="everyday">Everyday</option>
                                    <option value="onceAWeek">Once a week</option>
                                    <option value="twiceAWeek">Twice a week</option>
                                    <option value="threeTimesAWeek">Three times a week</option>
                                    <option value="onceAMonth">Once a month</option>
                                </select>
                                :
                                <div className="column">
                                    {this.formatIntervalString(plant.watering.interval)}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">
                            Last watering:
                        </div>
                        <div className="column dateInputColumn">
                            {this.props.isEditOn
                                ?
                                <DatePicker
                                    selected={Date.parse(plant.watering.lastTimeProcessed)}
                                    onChange={(date) => this.handleProcessDateChange(date, "watering")}
                                    name="watering"
                                    placeholderText="Select date and time"
                                    maxDate={new Date()}
                                    dateFormat="MM/dd/yyyy hh:mm"
                                    showTimeSelect
                                    popperPlacement="bottom"
                                    customInput={<CustomInput/>}
                                />
                                :
                                <div className="column">
                                    {moment(plant.watering.lastTimeProcessed).format(defaultDateFormat)}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Spraing interval:</div>
                        <div className="column">
                            {this.props.isEditOn
                                ?
                                <select className="column" value={plant.spraing.interval}
                                        name="spraing"
                                        onChange={(event) => this.handleIntervalSelect(event, "spraing")}>
                                    <option value="everyday">Everyday</option>
                                    <option value="onceAWeek">Once a week</option>
                                    <option value="twiceAWeek">Twice a week</option>
                                    <option value="threeTimesAWeek">Three times a week</option>
                                    <option value="onceAMonth">Once a month</option>
                                </select>
                                :
                                <div className="column">
                                    {this.formatIntervalString(plant.spraing.interval)}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Last spraing:</div>
                        <div className="column">
                            {this.props.isEditOn
                                ?
                                <DatePicker selected={Date.parse(plant.spraing.lastTimeProcessed)}
                                            onChange={(date) => this.handleProcessDateChange(date, "spraing")}
                                            name="spraing"
                                            placeholderText="Select date and time"
                                            maxDate={new Date()}
                                            dateFormat="MM/dd/yyyy hh:mm"
                                            showTimeSelect
                                            popperPlacement="bottom"
                                            customInput={<CustomInput/>}
                                />
                                :
                                <div className="column">
                                    {moment(plant.spraing.lastTimeProcessed).format(defaultDateFormat)}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Feeding interval:</div>
                        <div className="column">
                            {this.props.isEditOn
                                ?
                                <select className="column" value={plant.feeding.interval}
                                        name="feeding"
                                        onChange={(event) => this.handleIntervalSelect(event, "feeding")}>
                                    <option value="everyday">Everyday</option>
                                    <option value="onceAWeek">Once a week</option>
                                    <option value="twiceAWeek">Twice a week</option>
                                    <option value="threeTimesAWeek">Three times a week</option>
                                    <option value="onceAMonth">Once a month</option>
                                </select>
                                :
                                <div className="column">{this.formatIntervalString(this.props.plant.feeding.interval)}</div>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Last feeding:</div>
                        <div className="column">
                            {this.props.isEditOn
                                ?
                                <DatePicker selected={Date.parse(plant.feeding.lastTimeProcessed)}
                                            onChange={(date) => this.handleProcessDateChange(date, "feeding")}
                                            name="feeding"
                                            placeholderText="Select date and time"
                                            maxDate={new Date()}
                                            dateFormat="MM/dd/yyyy hh:mm"
                                            showTimeSelect
                                            popperPlacement="bottom"
                                            customInput={<CustomInput/>}
                                />
                                :
                                <div className="column">
                                    {moment(plant.feeding.lastTimeProcessed).format(defaultDateFormat)}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="column first">Notes:</div>
                        <div className="column">
                            {this.props.isEditOn
                                ?
                                <textarea name="notes" value={plant.notes} onChange={this.handleInput}/>
                                :
                                <div className="column">{plant.notes}</div>
                            }
                        </div>
                    </div>
                </div>
                <div>
                    {
                        this.props.isEditOn
                            ?
                            <div className="buttonsContainer">
                                <button className="saveButton"
                                        onClick={() => this.props.submitUpdatedPlantForm(this.state.plant)}>
                                    <img src="/icons/floppy-disk.png" alt=""/>
                                </button>
                                <button className="cancelButton" onClick={this.props.handleCancelButton}>
                                    <img src="/icons/cancel.png" alt=""/>
                                </button>
                            </div>
                            :
                            <div className="buttonsContainer">
                                <button className="editButton" onClick={this.props.handleEditButton}>
                                    <img src="/icons/edit-icon.png" alt=""/>
                                </button>
                                <DeletePlantButton handleDeletePlantButton={this.props.handleDeletePlantButton}/>
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default PlantFullDescription;