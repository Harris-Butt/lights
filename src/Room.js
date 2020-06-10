import React from 'react';
import './Room.css';
export function Room () {
    const [isLit, setLit] = React.useState(true);
    const [currentTemp, setTemp] = React.useState(72);
    const brightness = isLit ? "lit" : "dark";
    return (
        <div className={`room ${brightness}`}>
            <h2>The room is {isLit? 'lit' : 'dark'}</h2>
            <br />
            <button className = "buttonGreen" onClick = {()=> setLit(!isLit)}>
                Flip
            </button>
            <br />
            <br />
            <button className = "buttonGreen" onClick = {()=> isLit? setLit(isLit): setLit(!isLit)}>ON</button>
            <button className = "buttonBlue" onClick = {()=> !isLit? setLit(isLit) : setLit(!isLit)}>OFF</button>
            <br />
            <br />
            <h2>The current temprature is {currentTemp} F </h2>
            <br />
            
            <button className = "buttonGreen" onClick = {()=> setTemp(currentTemp => currentTemp + 1)}>+</button>
            <button className = "buttonBlue" onClick = {()=> setTemp(currentTemp => currentTemp - 1)}>-</button>

        </div>
    )
}