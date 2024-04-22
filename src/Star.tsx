// @flow
import * as React from 'react';
import {RatingValueType} from "./rating/Rating";

type Props = {
    selected: boolean
    value: RatingValueType
    setValue: (value: RatingValueType)=>void

};
export const Star = (props: Props) => {

        return <span  onClick={()=>{ props.setValue(props.value) }}>{props.selected ? <b>star </b> : "star "}</span>


}