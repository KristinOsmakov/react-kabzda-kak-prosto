// @flow 
import * as React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";


type Props = {
    titleValue: string,
    collapsed: boolean,
    onChange: (type: boolean)=>void,
};
export const Accordion = (props: Props) => {
    const accordionFunction = () => {
       props.collapsed === true ? props.onChange(false ) : props.onChange(true)
        props.onChange (!props.collapsed)
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={accordionFunction}/>
            {!props.collapsed && <AccordionBody/>}
        </div>

    )
};
