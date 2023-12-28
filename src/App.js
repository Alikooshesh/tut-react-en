import { createContext, useState } from "react";
import DecreaseButton from "./components/decreaseButton/DecreaseButton";
import DecreaseBox from "./components/decreaseBox/DecreaseBox";

export const CounterContext = createContext(null)

function App() {

  const [counter, setCounter] = useState(0)

  return (
    <>
      <CounterContext.Provider value={{counter , setCounter}}>
        <DecreaseBox/>
        <p>{counter}</p>
      </CounterContext.Provider>


    </>
  );
}

export default App;
