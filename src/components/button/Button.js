import './button.css'

function Button({children,onclickHandler}){
    return(
        <button className='btn' onClick={onclickHandler}>
            {children}
        </button>
    )
}

export default Button