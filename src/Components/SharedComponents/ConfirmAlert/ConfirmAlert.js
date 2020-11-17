import React from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class ConfirmAlert extends React.Component {
   render() {
       return confirmAlert({
           customUI: ({onClose}) => {
               return (
                   <div className='custom-ui'>
                       <h1>Are you sure?</h1>
                       <p>You want to delete this file?</p>
                       <button onClick={onClose}>No</button>
                       <button
                           onClick={() => {
                               this.handleClickDelete();
                               onClose();
                           }}
                       >
                           Yes, Delete it!
                       </button>
                   </div>
               );
           }
       })
   }
}

export default ConfirmAlert;
