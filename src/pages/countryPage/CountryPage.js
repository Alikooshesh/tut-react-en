import { useParams } from "react-router-dom"

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

const CountryPage = ()=>{

    let params = useParams()

    return(
        <div>
            {console.log(params.cca2)}
            <p>its {countryList.find(item => item.cca2 == params.cca2)?.name}'s page</p>
        </div>
    )
}

export default CountryPage