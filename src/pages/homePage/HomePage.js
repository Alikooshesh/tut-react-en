import { Link } from "react-router-dom"

const countryList = [
    {
        name : "iran",
        cca2 : "ir"
    },
    {
        name : "russia",
        cca2 : "ru"
    }
]

const HomePage = ()=>{
    return(
        <div>
            {countryList.map(item => <Link to={`/country/${item.cca2}`}><button>{item.name}</button></Link>)}
        </div>
    )
}

export default HomePage