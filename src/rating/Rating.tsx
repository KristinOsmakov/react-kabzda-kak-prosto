// @flow 
import * as React from 'react';
import {Star} from "../Star";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType)=>void
};
export const Rating = (props: RatingPropsType) => {
    return (
        <div>
            <Star selected={props.value > 0} setValue={props.onClick}  value={1}/>
            <Star selected={props.value > 1} setValue={props.onClick}  value={2}/>
            <Star selected={props.value > 2} setValue={props.onClick}  value={3}/>
            <Star selected={props.value > 3} setValue={props.onClick}  value={4}/>
            <Star selected={props.value > 4} setValue={props.onClick}  value={5}/>
        </div>
    )

};
