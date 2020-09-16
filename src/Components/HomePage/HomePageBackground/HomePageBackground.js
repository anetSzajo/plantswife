import React from 'react';

import AppLogo from "../../SharedComponents/AppLogo/AppLogo";
import './styles.scss';

function HomePageBackground () {
    return(
        <div className="homePage">
            <img className="homePageBackground" src="plantsPhotos/plants2.jpg" alt="" />
            <AppLogo />
        </div>
    )
}

export default HomePageBackground;