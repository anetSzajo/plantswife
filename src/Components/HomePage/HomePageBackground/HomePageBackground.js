import React from 'react';

import AppLogo from "../../SharedComponents/AppLogo/AppLogo";
import './styles.scss';

function HomePageBackground () {
    return(
        <div className="homePage">
            {/*<AppLogo />*/}
            <img className="homePageBackground" src="plantsPhotos/plants2.jpg" alt="" />
        </div>
    )
}

export default HomePageBackground;