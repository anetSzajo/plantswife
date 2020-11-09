import React from "react";
import axios from 'axios';

import './plantPhoto.scss';
import AddNewPlantPhoto from "../../PlantPage/AddNewPlantPhoto/AddNewPlantPhoto";
import {AuthContext} from "../../../Context/auth";

class PlantPhoto extends React.Component {
    state = {
        plant: this.props.plant,
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.fetchPlantImg();
    }

    fetchPlantImg = () => {
        axios.get(
            this.state.plant.imageUrl,
            {
                headers:
                    {
                        Authorization: `Bearer ${this.context.authTokens.access_token}`
                    },
                responseType: "arraybuffer"
            }
        )
            .then(x => {
                console.log(x)
                return x
            })
            .then((response) => {
                const data = `data:${response.headers['content-type']};base64,${new Buffer(response.data, "binary").toString('base64')}`;
                this.setState({ imgSrc: data });
            })
            .catch(err => {
                console.log(err)
            })
    }

    uploadPlantImage = (photo) => {
        const data = new FormData();
        data.append('image', photo)

        axios.post(`plants/${this.state.plant.id}/image`, data, {
            headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.context.authTokens.access_token}`
                }
        })
            .then(() => this.fetchPlantImg())
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        return (
            <div className={`plantPhoto__container ${this.props.fullDescriptionView && 'largePhoto'}`}>
                <img className="plantPhoto"
                     src={
                         this.state.imgSrc
                     }
                     alt=""/>
                {this.props.allowAddNewPlantPhoto
                    ?
                    <AddNewPlantPhoto handlePhoto={this.uploadPlantImage}/>
                    :
                    null
                }
            </div>
        )
    }
}

export default PlantPhoto;