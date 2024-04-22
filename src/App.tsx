import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./rating/Rating";

import {Accordion} from "./accordion/Accordion";
import {OnOff} from "./onOff/OnOff";
import {UnControlledAccordion} from "./accordion/UnControlledAccordion";
import {UnControlledRating} from "./rating/UnControlledRating";
import {UnControlledOnOff} from "./onOff/UnControlledOnOff";



function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionValue, setAccordionValue] = useState(false)
    let [switchOn, setswitchOn] = useState(false)
    return (
        <div className="App">
            <UnControlledAccordion titleValue={"Menu"}/>
            {/*<UnControlledRating />*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<OnOff on={switchOn} onChange={setswitchOn}/>*/}
            <UnControlledOnOff onChange={setswitchOn}/>
            <Accordion  titleValue={"This is APP component"} collapsed={accordionValue} setAccordionValue={setAccordionValue}/>

        </div>
    );
}

export default App;
