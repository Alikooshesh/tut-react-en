import './button.css'

function Button({children , style}){
    return(
        <button className='btn' style={style}>{children}</button>
    )
}

export default Button