// @flow 
import * as React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {useReducer, useState} from "react";


type Props = {
    titleValue: string,
    // collapsed: boolean
};


export const UnControlledAccordion = (props: Props) => {
    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})
    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={()=>setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.titleValue} onClick={()=>{dispatch({type: TOGGLE_CONSTANT})}}/>

            {!state.collapsed && <AccordionBody onClick={()=> {}}/>}
        </div>

    )



};
