import React, { useState } from 'react'

let timer;
const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [buttonName, setButonName] = useState('Start');

    const onStartCounter = () => {
        const name = document.getElementById("startStop").innerText
        if (name === 'Start') {
            setButonName('Pause')
            setCounter(counter => counter + 1)
            timer = setInterval(() => {
                setCounter(counter => counter + 1)
            }, 1000);
        }
        else if (name === 'Pause') {
            setButonName('Start')
            clearInterval(timer)
        }
    }
    const onResetCounter = () => {
        clearInterval(timer)
        setCounter(0)
        setButonName('Start')
    }

    return (
        <div className='main-container'>
            <h2 className='header'>Counter Aapplication</h2>
            <div>Current counter value :  <strong>{counter}</strong> </div>
            <br />
            <div className='buttons'>
            <button className='button' id='startStop' onClick={onStartCounter}>{buttonName}</button>
            <button className='button' onClick={onResetCounter}>Reset</button>
            </div>
        </div>
    )
}

export default Counter