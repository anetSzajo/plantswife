import React from 'react';

import PlantDescription from './PlantDescription/PlantDescription';
import PlantPhoto from "./PlantPhoto/PlantPhoto";
import PlantButtons from "./PlantButtons/PlantButtons";

function Plant({ plant }){
    return(
        <div>
            <PlantPhoto />
            <PlantButtons />
            <PlantDescription plant={plant}/>
        </div>
    )
}

export default Plant;