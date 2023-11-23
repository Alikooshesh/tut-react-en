import { useState } from 'react';
import './App.css'
import Button from './components/button/Button';
import Input from './components/input/input';
import TodoBox from './components/todoBox/TodoBox';

function App() {

  const [data, setData] = useState([])

  const [inpVal , setInpVal] = useState("")

  function removeTodo(todoId){
    setData(data.filter(item => item.id != todoId))
  }

  return (
    <div className='container'>
      <div className="addNewTodo-wrapper">
        <Input valueState={inpVal} onChangeHandler={(e)=> setInpVal(e.target.value)}/>
        <Button onclickHandler={()=>setData([...data,{id : Date.now() , text : inpVal}])}>+</Button>
      </div>

      <div className='todoList-wrapper'>

        {data.map(item => {
          return(
            <TodoBox id={item.id} text={item.text} removeTodo={removeTodo}/>
          )
        })}
      </div>
    </div>
  );
} 

export default App;
