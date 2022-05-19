import React, { useState } from "react";
const ClockwithHook =() => {
    const[date, setDate]=useState(new Date());
    return(<div><h2>Time is new {date.toLocaleTimeString()}.</h2>
    <button onClick={() => {this.tick();}}>Click here</button></div>
    )
};
export default ClockwithHook;