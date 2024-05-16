import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./rating/Rating";
import {ExampleSelect} from "./example/ExampleSelect";




function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionValue, setAccordionValue] = useState(false)
    let [switchOn, setswitchOn] = useState(false)


    return (
        <div className="App">
            <ExampleSelect />
        </div>
    );
}

export default App;
