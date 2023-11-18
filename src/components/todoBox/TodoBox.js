import './todoBox.css'

function TodoBox({text}){
    return(
        <div className="todo-box">
            <p>{text}</p>
        </div>
    )
}

export default TodoBox