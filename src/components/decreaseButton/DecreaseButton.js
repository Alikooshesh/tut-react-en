import { useContext } from "react"
import { CounterContext } from "../../App"

const DecreaseButton = ()=>{

    const counterState = useContext(CounterContext)

    return(
        <>
        <button onClick={()=> counterState.setCounter(counterState.counter-1)}> - </button>
        {console.log(counterState)}
        </>
    )
}

export default DecreaseButton