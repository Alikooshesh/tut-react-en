import './button.css'

function Button({children,onclickHandler,style,disabled}){
    return(
        <button className='btn' onClick={onclickHandler} style={style} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button