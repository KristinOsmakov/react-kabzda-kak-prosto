import * as React from 'react';
import { action } from '@storybook/addon-actions';
import {Accordion} from "./Accordion";
import {useState} from "react";

export default {
    title: 'Accordion2 stories',
    component: Accordion,
};
const callback = action('Accordion mode change event fired');
export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback}/>;
export const UsersUnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Users"} collapsed={value} onChange={setValue}/>
};