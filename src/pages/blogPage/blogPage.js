import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

export default function BlogPage(){

    let navigate = useNavigate()
    let location = useLocation()

    let params = useParams()

    function clickHandler(){
        navigate('/')
    }

    return(
        <div>
            {console.log(params)}
            its blog page
            {params.id == 5 ? <p>you are a vip</p>: <></>}
            <button onClick={clickHandler}>go to homePage</button>
            <Outlet/>
        </div>
    )
}