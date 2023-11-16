import logo from './logo.svg';
import TestText from './components/testText/TestText'
import Button from './components/button/Button';
import './App.css';
import './newStyle.css'

function App() {

  return (
    <div>

      <Button style={{backgroundColor : "red"}}>
        its children
      </Button>

      <Button onClickHandler={()=>console.log('its called from parent')}>
        its second children
      </Button>
    </div>
  );
}

export default App;
