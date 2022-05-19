import React, { useState, useEffect } from 'react';
const ClockWithHooks = () => {
    const [date, setDate] = useState(new Date());
    const tick = () => {
        setDate(new Date());
    };
    //Similar to componentDidMount and ComponentDidUpdate;
    useEffect(() => {
        //update the document title using the browser API
        const timerID = setInterval(() => tick(),1000);
        //specify how to clean up after this effect;
        return() => clearInterval(timerID);
    });
    return(
        <div><h2> exact time {date.toLocaleTimeString()}.</h2></div>
        )
}
export default ClockWithHooks;