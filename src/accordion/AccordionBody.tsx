// @flow
import * as React from 'react';
import {ItemType} from "./Accordion";

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
};
export const AccordionBody = ({items, onClick}: AccordionBodyPropsType) => {
    return (
        <ul>
            { items.map( (i, index) => <li onClick={() => { onClick(i.value)} } key={index}>{i.title}</li>)}
        </ul>
    );
};