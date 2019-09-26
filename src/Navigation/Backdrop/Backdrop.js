import React from 'react';
import  './Backdrop.css';
const bachdrop = (props) => (
   props.show ? <div className = 'Backdrop' onClick = {props.clicked} > </div> : null
);
export default bachdrop;
