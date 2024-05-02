import type {Meta} from '@storybook/react'

import {Select} from './Select';

const meta: Meta<typeof Select> = {
    component: Select,
};

export default meta;

export const CollapsedSelect = () => {
    return <div>Hello</div>
}
export const OpenedSelect = () => {
    return <div>Open</div>
}