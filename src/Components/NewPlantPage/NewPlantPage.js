import React from 'react';

import GoHomeButton from "../SharedComponents/GoHomeButton/GoHomeButton";
import './newPlantPage.scss';

class NewPlantPage extends React.Component{
    render(){
        return(
            <div>
                <div className="newPlantForm">
                    <p>FORM</p>
                </div>
                <GoHomeButton />
            </div>
        )
    }
}

export default NewPlantPage;