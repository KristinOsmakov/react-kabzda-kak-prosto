import {useEffect, useState} from "react";
import React from 'react';

export default {
    title: 'useEffect demo '
}


export const SimpleExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);




    console.log("SimpleExample")

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString();
    });
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString();
    }, []);
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString();
    }, [counter]);


    return <>
        hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>


}
export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log("SetTimeoutExample")


    return <>
        hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
    </>
}
export const Time = () => {

const [time, setTime] = useState(new Date());

useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])
const formatTime = (date: Date): string => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
    return (
        <div style={{ fontFamily: 'monospace', fontSize: '2rem' }}>
            {formatTime(time)}
        </div>
    );


}