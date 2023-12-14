
import axios from "axios";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "./components/button/Button";

function App() {

  const notify = (msg) => toast(msg);

  const [countryList , setCountryList] = useState([])

  useEffect(()=>{
    // fetch('https://restcountries.com/v3.1/all')
    // .then(response => response.json())
    // .then(result => setCountryList(result))
    // .catch(err => console.log(err))

    axios.get('https://restcountries.com/v3.1/all')
    .then(result => setCountryList(result.data))
    .catch(err => console.log(err))
  },[]) 

  return (
    <>
    {countryList.map(item => (
      <div key={item.cca2}>
        {item.name.common} : {item.cca2}
      </div>
    ))}
      
      <button onClick={()=> notify("first message")}>Notify !</button>
      <button onClick={()=> notify("second message")}>second !</button>
      <ToastContainer 
        position="bottom-left"
        autoClose={20000}
      />

      <Button color={'white'} size={'lg'}>
        test
      </Button>

      <Button color={"yellow"} size={'md'}>
        ss
      </Button>
    </>
  );
}

export default App;
