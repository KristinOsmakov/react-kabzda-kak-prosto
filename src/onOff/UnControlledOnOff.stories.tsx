import * as React from 'react';
import { action } from '@storybook/addon-actions';
import {UnControlledOnOff} from "./UnControlledOnOff";
import {useState} from "react";

export default {
    title: 'UnControlledOnOff stories',
    component: UnControlledOnOff,
};
const callback = action('on or off clicked');
export const OnMode = () => <UnControlledOnOff defaultOn={true} onChange={callback}/>;
export const OffMode = () => <UnControlledOnOff defaultOn={false}  onChange={callback}/>;
export const BugMode = () => <div>Unsync</div>;
export const DefaultInputValue = () => <input defaultValue={'yo'}/>;

// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(true);
//     return <UnControlledOnOff  onChange={setValue}/>
// };