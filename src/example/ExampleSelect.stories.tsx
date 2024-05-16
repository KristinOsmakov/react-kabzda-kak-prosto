import * as React from 'react';
import {action} from "@storybook/addon-actions";
import {ExampleSelect} from "./ExampleSelect";
import {useState} from "react";
import {v1} from "uuid";

export default {
    title: "ExampleSelect",
    component: ExampleSelect
}
const items = [
    {id: v1(), title: "Minsk", country: "Belarus", number: 1975000},
    {id: v1(), title: "Moskov", country: "Russia", number: 11700000},
    {id: v1(), title: "Kiev", country: "Ukraine", number: 2880000},
    {id: v1(), title: "Grodno", country: "Belarus", number: 368710},
    {id: v1(), title: "Brest", country: "Belarus", number: 343985},
    {id: v1(), title: "St.Peterburg", country: "Russia", number: 5600000},
    {id: v1(), title: "Mogilev", country: "Belarus", number: 380440},
    {id: v1(), title: "Riga", country: "Latvia", number: 632600},
    {id: v1(), title: "Vilnus", country: "Lithuania", number: 544400}
]
export const FilterCountry = () => {
    const [value, setValue] = useState('')

    let filterCountry = items.filter(country => {
        return country.country === 'Belarus'
    })
    return (
        <ExampleSelect
            items={filterCountry}
            value={value}
            onChange={setValue}
        />
    );
}
export const FilterNumber = () => {
    const [value, setValue] = useState('')

    let filterNumber = items.filter(country => {
        return country.number > 1000000
    })
    return (
        <ExampleSelect
            items={filterNumber}
            value={value}
            onChange={setValue}
        />
    );
}
export const FilterLetter = () => {
    const [value, setValue] = useState('')

    let filterLetter = items.filter(country => {
        return country.title[0] === "M"
    })
    return (
        <ExampleSelect
            items={filterLetter}
            value={value}
            onChange={setValue}
        />
    );
}


