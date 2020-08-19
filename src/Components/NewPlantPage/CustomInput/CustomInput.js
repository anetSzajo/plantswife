import React from "react";
import './customInput.scss';


class CustomInput extends React.Component {
    render() {
        return (
           <div className="calendar-icon__container">
               <img src="/icons/calendar.png" alt="" className="calendar-icon"/>
               <input value={this.props.value} onChange={this.props.onChange} onClick={this.props.onClick}/>
           </div>
        )
    }
}

export default CustomInput;