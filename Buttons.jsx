
import React from 'react';
import Button from '@material-ui/core/Button';

const Buttons = (props) => {

    return (
        <Button onClick={props.onclick} id={props.Id} variant="contained" color={props.Color} style={{
            margin: "0.1rem", fontSize: "4rem", width: props.width, height: props.height,
            backgroundColor: props.color, marginTop: props.mt, marginLeft: props.ml
        }}>{props.name}</Button>
    )
}

export default Buttons;