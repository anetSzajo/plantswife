import React from "react";
import {confirmAlert} from "react-confirm-alert";
import './deletePlantPhotoButton.scss';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function DeletePlantPhotoButton(props) {

    const handleClick = () => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete this photo?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => props.handleClickDelete()
                },
                {
                    label: 'No'
                }
            ]
        });
    };

    return (
        <div>
            <button className="deletePlantPhotoButton" onClick={handleClick}>
                <img src="/icons/cancel.png" alt=""/>
            </button>
        </div>
    )
}