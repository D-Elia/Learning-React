import logo from './logo.svg';
import './App.css';
import Hello from'./Hello';
import Hi from'./Hi';
import Clock from './Clock';
import Toggle from './Toggle';
import Throttle from './Throttle';
import Clocks from'./Clocks';
import ClockWithHooks from './ClockWithHooks';
import ClockwithHook from './ClockwithHook';
import Weather,{TemperatureInCelcius} from './Weather';


function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        //<p>
          elia <code>src/App.js</code> and save to reload.
        </p>
      
        {/* <Clocks/>
        <Hello/>
        <Hi/> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    
        {/* <p><Clock/></p>
        <p><Toggle/></p>
        <p><Throttle/></p>
        <ClockWithHooks/>
        <ClockwithHook/> */}
        <Weather/>
        <TemperatureInCelcius/>
      </header>
    </div>
  );
}

export default App;
