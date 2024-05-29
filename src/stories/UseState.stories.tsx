import {useState} from "react";
import React from 'react';

export default {
    title: 'useState demo '
}

function generateData() {
    console.log("generateData")
    return 1;
}
export const Example = () => {
    console.log("Example1")
    const [counter, setCounter] = useState<number>(generateData);



    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}

