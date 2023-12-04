import './todoBox.css'
import { MdCheckCircleOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function TodoBox({id,text,removeTodo, isComplete, completeTodoFunction,changeToEditMode}){
    return(
        <div className="todo-box">
            <p className={isComplete ? "line-through" : ""}>{text}</p>

            <div className='flex gap-1'>
                <svg onClick={()=> removeTodo(id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                </svg>
                {!isComplete ? 
                    <div onClick={()=> completeTodoFunction(id)}>
                    <MdCheckCircleOutline />
                </div> :
                <></>
                }

                <div onClick={()=> changeToEditMode(id)}>
                    <MdEdit />
                </div>
            </div>
        </div>
    )
}

export default TodoBox