import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import React, {useState} from "react";

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// }

export default {
    component: Accordion
}
const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion  titleValue={"Collapsed Accordion"}
                       collapsed={true}
                       onChange={ onChangeHandler}
                       onClick={()=>{}}
                       />
}
export const OpenedAccordion = () => {
    return <Accordion  titleValue={"Opened Accordion"}
                       collapsed={false}
                       onChange={ ()=> {}}
                       onClick={()=>{}}
    />
}
export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion  titleValue={"Accordion"}
                       collapsed={collapsed}
                       onChange={ ()=> setCollapsed(!collapsed) }
                       onClick={()=>{}}
    />
}