// @flow 
import * as React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type ItemType = {
    title: string
    value: any
}
type Props = {
    titleValue: string,
    collapsed: boolean,
    onChange: (type: boolean)=>void,
    items?: ItemType[],
    onClick: (value: any) => void,
};
export const Accordion = (props: Props) => {
    const accordionFunction = () => {
       props.collapsed === true ? props.onChange(false ) : props.onChange(true)
        props.onChange (!props.collapsed)
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={accordionFunction}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>

    )
};
