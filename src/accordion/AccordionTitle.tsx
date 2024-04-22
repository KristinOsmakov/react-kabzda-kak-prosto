// @flow
import * as React from 'react';

type Props = {
    title: string
    onClick: ()=>void
};
export const AccordionTitle = (props: Props) => {
    return (

        <h3 onClick={ () => {props.onClick()}}>{props.title}</h3>

    );
};