import * as React from 'react';
import { action } from '@storybook/addon-actions';
import {UnControlledAccordion} from "./UnControlledAccordion";
import {useState} from "react";

export default {
    title: 'UnControlledAccordion stories',
    component: UnControlledAccordion,
};
const callback = action('Accordion mode change event fired');

export const ModeChanging = () => {
    return <UnControlledAccordion titleValue={"Users"} />
};