import React, { useCallback, useEffect, useState } from 'react'



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
        <div>

            <div>Current cunter value : {counter}</div>
            <button id='startStop' onClick={onStartCounter}>{buttonName}</button>
            <button onClick={onResetCounter}>Reset</button>
        </div>
    )
}

export default Counter