// @flow 
import * as React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";


type Props = {
    titleValue: string,
    collapsed: boolean
    setAccordionValue: (type: boolean)=>void
};
export const Accordion = (props: Props) => {
    const accordionFunction = () => {
       // props.collapsed === true ? props.setAccordionValue(false ) : props.setAccordionValue(true)
        props.setAccordionValue (!props.collapsed)
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={accordionFunction}/>
            {!props.collapsed && <AccordionBody/>}
        </div>

    )



};
