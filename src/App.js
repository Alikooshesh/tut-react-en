import Button from './components/button/Button';
import './App.css';
import './newStyle.css'
import { useEffect, useState } from 'react';

function App() {

  const [counter , setCounter] = useState(0)

  useEffect(()=>{
    console.log("counter changed!")
  },[counter])

  return (
    <div>

      <p>
        {counter}
      </p>

      <Button onClickHandler={()=> setCounter(counter+1)}>+</Button>
    </div>
  );
} 

export default App;
