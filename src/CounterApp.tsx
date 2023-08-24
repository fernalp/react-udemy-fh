// import { number } from "prop-types";
import { useState } from "react"

type Prop = {
    value: number
}

export const CounterApp = ({value}:Prop) => {

    const [counter, setCounter] = useState(value);
    const changeCounter = (n:number):void=>{
        setCounter(counter + n)
    }
    const resetCounter = ()=>{
        setCounter(value)
    }


    return (
        <>
            <h1>Counter:</h1>
            <h4>{counter}</h4>
            <button onClick={()=> changeCounter(1)}>+1</button>
            <button onClick={()=>changeCounter(-1)}>-1</button>
            <button onClick={resetCounter}>Reset</button>
        </>
    )
}
