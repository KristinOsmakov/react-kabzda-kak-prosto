// @flow 
import * as React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {useState} from "react";


type Props = {
    titleValue: string,
    // collapsed: boolean
};
export const UnControlledAccordion = (props: Props) => {
    let [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>setCollapsed(!collapsed)}/>

            {!collapsed && <AccordionBody/>}
        </div>

    )



};
