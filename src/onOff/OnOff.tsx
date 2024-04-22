// @flow 
import * as React from 'react';
import {Simulate} from "react-dom/test-utils";
import toggle = Simulate.toggle;
import {useState} from "react";

type Props = {
    on:boolean
    onChange: (on: boolean)=>void

};
export const OnOff = ({on, onChange}: Props) => {



    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "green" : "white",
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "white" : "red",
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        backgroundColor: on ? "green" : "red",
    }

    return (
        <div>
            <div style={onStyle} onClick={ ()=> { onChange(true) } }>On</div>
            <div style={offStyle} onClick={ ()=> { onChange(false) } }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
