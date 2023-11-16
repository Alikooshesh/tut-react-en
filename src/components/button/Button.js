import './button.css'

function Button({children , style}){

    return(
        <button 
            onClick={()=>{console.log("test")}}
            className='btn' 
            style={style}>
                {children}
        </button>
    )
}

export default Button