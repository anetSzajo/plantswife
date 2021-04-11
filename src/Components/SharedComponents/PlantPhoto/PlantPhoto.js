import React from "react";
import axios from 'axios';
import AddNewPlantPhoto from "./AddNewPlantPhoto/AddNewPlantPhoto";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from '../../SharedComponents/Alert/Alert';
import DeletePlantPhotoButton from "./DeletePlantPhotoButton/DeletePlantPhotoButton";
import './plantPhoto.scss';

class PlantPhoto extends React.Component {
    state = {
        plant: this.props.plant,
        open: false,
        errorMessage: ''
    }

    componentDidMount() {
        this.state.plant.imageUrl && this.fetchPlantImg()
    }

    handleClick = (errorMessage) => {
        this.setState({
            open: true,
            errorMessage: errorMessage
        });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            open: false
        });
    };

    fetchPlantImg = () => {
        let url = this.state.plant.imageUrl || `plants/${this.state.plant.id}/image`

        axios.get(url, {responseType: "arraybuffer"})
            .then((response) => {
                const data = `data:${response.headers['content-type']};base64,${new Buffer(response.data, "binary").toString('base64')}`;
                this.setState({imgSrc: data});
            })
            .catch(err => {
                console.log(err)
            })
    }

    uploadPlantImage = (photo) => {
        const data = new FormData();
        data.append('image', photo);

        axios.post(`plants/${this.state.plant.id}/image`, data)
            .then((res) => this.setState({
                plant:{
                    ...this.state.plant,
                    imageUrl: res.data.imageUrl
                }
            }))
            .then(() => this.fetchPlantImg())
            .catch(err => {
                this.setState({
                    imgSrc: '/icons/defaultPlantPhoto.png'
                }, () => this.handleClick('Failed to upload photo. Please use png/jpg format.'))
            })
    }

    deletePlantImage = () => {
        axios.delete(this.state.plant.imageUrl)
            .then(res => {
                this.setState({
                    imgSrc: '/icons/defaultPlantPhoto.png'
                })
            })
            .catch(err => this.handleClick('Failed to delete photo. Maybe already deleted?'))
    }

    render() {
        return (
            <div className={`plantPhoto__container ${this.props.fullDescriptionView && 'largePhoto'}`}>
                <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}
                          anchorOrigin={{vertical: "top", horizontal: "center"}}>
                    <Alert onClose={this.handleClose} severity="warning">
                        {this.state.errorMessage}
                    </Alert>
                </Snackbar>
                <img className="plantPhoto"
                     src={
                         this.state.imgSrc ? this.state.imgSrc : '/icons/defaultPlantPhoto.png'
                     }
                     alt=""/>
                {this.props.allowAddNewPlantPhoto && !this.props.isEditOn
                    ?
                    <AddNewPlantPhoto handlePhoto={this.uploadPlantImage}/>
                    :
                    this.props.allowAddNewPlantPhoto && this.props.isEditOn
                        ?
                        <div>
                            <AddNewPlantPhoto handlePhoto={this.uploadPlantImage}/>
                            <DeletePlantPhotoButton handleClickDelete={this.deletePlantImage}/>
                        </div>
                        :
                        null
                }
            </div>
        )
    }
}

export default PlantPhoto;