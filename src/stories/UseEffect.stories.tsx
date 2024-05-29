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
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000);
    }, []);

    return <>
        hello, counter: {counter} - fake: {fake} : date: {hours} : {minute} : {seconds}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
    </>
}

