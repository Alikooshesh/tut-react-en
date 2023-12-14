import { useEffect, useState } from "react"

const Button = ({children , color , size , ...props})=>{

    const [btnClassName , setBtnClassName] = useState([])

    useEffect(()=>{
        let tempClassess = []
        if(color == 'white'){
            tempClassess.push('bg-white')
        }else if(color == 'yellow'){
            tempClassess.push('bg-yellow-500')
        }else{
            tempClassess.push('bg-black')
        }

        if(size == 'sm'){
            tempClassess.push('text-[6px]')
        }else if(size == 'lg'){
            tempClassess.push('text-[8px]')
        }else{
            tempClassess.push('text-[10px]')
        }

        setBtnClassName(['w-full' , 'h-full' , 'rounded-[6px]' , ...tempClassess])
        
    },[color , size])

    return(
        <button className={btnClassName.join(" ")} {...props}>
            {children}
        </button>
    )
}

export default Button