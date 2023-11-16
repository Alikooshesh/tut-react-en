import { useEffect } from 'react'
import './button.css'

function Button({children , style , onClickHandler}){

    return(
        <button 
            onClick={onClickHandler}
            className='btn' 
            style={style}>
                {children}
        </button>
    )
}

export default Button