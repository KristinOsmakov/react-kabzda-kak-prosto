import * as React from "react";
import {useState, KeyboardEvent, useEffect, useMemo} from "react";
import {v1} from 'uuid'


export type cityPropsType = {
    id: string,
    title: string,
    country: string,
    number: number
}
export type ExportSelectPropsType = {
    value?: any,
    items?: cityPropsType[],
    onChange?: (value: any)=>void
}

// export type ContainerUseStateType = {
//     filter1: string,
//     filter2: string,
//     filter3: string,
//     counter: number,
//     setFilter1: (filter1: string) => void,
//     setFilter2: (filter2: string) => void,
//     setFilter3: (filter3: string) => void,
//     setFilter1: (counter: number) => void,
// }
// export const ContainerUseState = () => {
//     const [filter1, setFilter1] = useState('')
//     const [filter2, setFilter2] = useState('')
//     const [filter3, setFilter3] = useState('')
//     const [counter, setCounter] = useState(0)
// }

export const ExampleSelect = (props: ExportSelectPropsType) => {
    const city: cityPropsType[] = [
        {id: v1(), title: "Minsk", country: "Belarus", number: 1975000},
        {id: v1(), title: "Moscow", country: "Russia", number: 11700000},
        {id: v1(), title: "Kiev", country: "Ukraine", number: 2880000},
        {id: v1(), title: "Grodno", country: "Belarus", number: 368710},
        {id: v1(), title: "Brest", country: "Belarus", number: 343985},
        {id: v1(), title: "St.Peterburg", country: "Russia", number: 5600000},
        {id: v1(), title: "Mogilev", country: "Belarus", number: 380440},
        {id: v1(), title: "Riga", country: "Latvia", number: 632600},
        {id: v1(), title: "Vilnus", country: "Lithuania", number: 544400}
    ]
    const [filter1, setFilter1] = useState('')
    const [filter2, setFilter2] = useState('')
    const [filter3, setFilter3] = useState('')
    const [counter, setCounter] = useState(0)


    const Memo = useMemo(() => {
            return (
                <>
                    <select onChange={(e) => setFilter1(e.currentTarget.value)}>
                        <option value="">-</option>
                        <option value="Belarus">Belarus</option>
                    </select>
                    <select onChange={(e) => setFilter2(e.currentTarget.value)}>
                        <option value="">-</option>
                        <option value="1000000">Город-миллионник</option>
                    </select>
                    <select onChange={(e) => setFilter3(e.currentTarget.value)}>
                        <option value="">-</option>
                        <option value="M">Город на букву "М"</option>
                    </select>
                </>
            )
        }, [])

    let filterAll = city.filter(country => {
        return country.country.includes(filter1) && country.number > Number(filter2) && country.title.includes(filter3)
    })

    return (
        <>
            {Memo}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <ul>
                {filterAll.map(el => {
                    return (
                        <>
                            <option key={el.id}>{el.country} {el.title} {el.number}</option>
                        </>
                    )
                })}
            </ul>
        </>

    )

};
