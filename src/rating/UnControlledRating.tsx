// @flow
import * as React from 'react';
import {Star} from "../Star";
import {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
type UnControlledRatingPropsType = {
    defaultValue?: RatingValueType,
    onChange: (value: RatingValueType) => void
};
export const UnControlledRating = (props: UnControlledRatingPropsType) => {
    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);
    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )

};
