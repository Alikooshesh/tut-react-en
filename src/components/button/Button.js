function Button({children , onclickHandler}){
    return(
        <button onClick={onclickHandler}>{children}</button>
    )
}

export default Button