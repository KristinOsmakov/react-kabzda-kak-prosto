import { action } from '@storybook/addon-actions';
import React, {useState} from "react";
import {Clock} from "./Clock";
import {Accordion} from "../accordion/Accordion";

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// }

export default {
    title: 'Clock',
    component: Clock
}

export const BaseAnalogExample = () => {

    return <Clock mode={'analog'}/>
};
export const BaseDigitalExample = () => {

    return <Clock mode={'digital'}/>
};