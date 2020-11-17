import React from "react";
import './addNewPlantPhoto.scss';

function AddNewPlantPhoto(props) {

    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    }

    const handleChange = (event) => {
        const photoUploaded = event.target.files[0];
        props.handlePhoto(photoUploaded);
    }

    return(
        <div>
            <button className="addNewPlantPhotoButton" onClick={handleClick}>
                <img src="/icons/ar-camera.png" alt=""/>
            </button>
            <input
                type="file"
                className="fileInput"
                ref={hiddenFileInput}
                onChange={handleChange}
            />
        </div>

    )
}

export default AddNewPlantPhoto;