import { useState } from 'react';
import './App.css'
import Button from './components/button/Button';
import Input from './components/input/input';
import TodoBox from './components/todoBox/TodoBox';

function App() {

  const [data, setData] = useState([])

  const [inpVal , setInpVal] = useState("")

  return (
    <div className='container'>
      {console.log(data)}
      <div className="addNewTodo-wrapper">
        <Input valueState={inpVal} onChangeHandler={(e)=> setInpVal(e.target.value)}/>
        <Button onclickHandler={()=>setData([...data,inpVal])}>+</Button>
      </div>

      <div className='todoList-wrapper'>

        {data.map(item => {
          return(
            <TodoBox text={item}/>
          )
        })}
      </div>
    </div>
  );
} 

export default App;
