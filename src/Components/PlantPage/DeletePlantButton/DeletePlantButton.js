import React from "react";
import {confirmAlert} from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import './deletePlantButton.scss';

export default function DeletePlantButton(props) {

    const handleClick = () => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete this plant?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => props.handleDeletePlantButton()
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    return (
        <div>
            <button className="deletePlantButton" onClick={handleClick}>
                <img src="/icons/trash.png" alt=""/>
            </button>
        </div>
    )
}