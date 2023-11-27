import { useState } from 'react';
import './App.css'
import Button from './components/button/Button';
import Input from './components/input/input';
import TodoBox from './components/todoBox/TodoBox';

import { BsAirplaneFill } from "react-icons/bs";

function App() {

  const [data, setData] = useState([])

  const [inpVal , setInpVal] = useState("")

  const [formMode , setFormMode] = useState({mode : "add" , id : null})

  function removeTodo(todoId){
    setData(data.filter(item => item.id != todoId))
  }

  function completeTodo(todoId){
    console.log(todoId)
    setData(data.map(item =>{
      if(item.id == todoId){
        item.isComplete = true
        return item
      }else{
        return item
      }
    }))
  }

  function editTodo(todoId, newText){
    setData(data.map(item =>{
      if(item.id == todoId){
        item.text = newText
        return item
      }else{
        return item
      }
    }))

    setFormMode({mode : "add" , id : null})
  }

  function changeToEditMode(todoId){
    setFormMode({mode : "edit" , id : todoId})
  }

  return (
    <div className='container'>
      <div className="addNewTodo-wrapper">
        <Input valueState={inpVal} onChangeHandler={(e)=> setInpVal(e.target.value)}/>
        {formMode?.mode == 'edit' ?
          <Button onclickHandler={()=>editTodo(formMode.id , inpVal)}>ok</Button> :
          <Button onclickHandler={()=>setData([...data,{id : Date.now() , text : inpVal, isComplete : false}])}>+</Button>
        }
      </div>

      <div className='todoList-wrapper'>

        {data.map(item => {
          return(
            <TodoBox 
              id={item.id} 
              text={item.text} 
              removeTodo={removeTodo} 
              isComplete={item.isComplete}
              completeTodoFunction={completeTodo}
              changeToEditMode={changeToEditMode}
            />
          )
        })}
      </div>
    </div>
  );
} 

export default App;
