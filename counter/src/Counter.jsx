import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [buttonName, setButonName] = useState('Start');
    const [counterFlag, setCounterFlag] = useState(true);
    let timer;

    const onStartCounter=()=>{

        const name = document.getElementById("startStop").innerText
        console.log("counterFlag",counterFlag)
        if(name==='Start' && counterFlag===true){
            setButonName('Pause')
            timer = setInterval(() => {
                setCounter(counter => counter + 1)
                }, 1000);
                console.log(name)
        }
        else if(name==='Pause'){
            console.log(name)
            setButonName('Start')
            setCounterFlag(false)
            // setCounter(counter)
            clearInterval(timer)
        }
    }

    const onResetCounter=()=>{
        setCounter(0)
        setCounterFlag(false)
        clearInterval(timer)


    }
    // useEffect(()=>{
    //     timer = setTimeout(() => {
    //     setCounter(counter+1)
    //     }, 1000);
    // },[counter])

  return (
    <div>

        <div>Current cunter value : {counter}</div>
        <button  id='startStop' onClick={onStartCounter}>{buttonName}</button>
        {/* <button  onClick={onStopCounter}>Stop</button> */}
        <button  onClick={onResetCounter}>Reset</button>
    </div>
  )
}

export default Counter