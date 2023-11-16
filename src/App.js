import logo from './logo.svg';
import TestText from './components/testText/TestText'
import Button from './components/button/Button';
import './App.css';
import './newStyle.css'

function App() {

  const test = 5;
  console.log(logo)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestText/>
        <TestText/>
        <TestText/>
        <Button/>
        <TestText/>
        <TestText/>
        <TestText/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className='my-text'>its my first changes {test + 7}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
