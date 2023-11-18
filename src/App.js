import { useState } from "react";
import Button from "./components/button/Button";

function App() {


  const [counter , setCounter] = useState(0)

  return (
    <div>
      <Button onclickHandler={()=> setCounter(counter-1)}>
        -
      </Button>
      <p>{counter}</p>

      <Button onclickHandler={()=> setCounter(counter+1)}>
        +
      </Button>
    </div>
  );
} 

export default App;
