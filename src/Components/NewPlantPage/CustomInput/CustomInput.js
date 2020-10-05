import React from "react";
import './customInput.scss';


class CustomInput extends React.Component {
    render() {
        return (
           <div className="calendar-icon__container">
               {
                   this.props.calendarIcon
                   ?
                       <img src="/icons/calendar.png" alt="" className="calendar-icon"/>
                       :
                       null
               }
               <input value={this.props.value} onChange={this.props.onChange} onClick={this.props.onClick}/>
           </div>
        )
    }
}

export default CustomInput;