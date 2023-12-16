import { useEffect } from "react";

function App() {

  

  function btnClickHandler(){
    let user = {
      name : "ali",
      age : 23
    }
    localStorage.setItem('firstTest' , JSON.stringify(user))
  }

  useEffect(()=>{
    let ls = localStorage.getItem('firstTest')
    ls = JSON.parse(ls)
    console.log(ls)
  },[])

  return (
    <div>
      <button onClick={()=> btnClickHandler()}>click me</button>
    </div>
  );
}

export default App;
