import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Count from './Components/Count';
import Clock from './Components/Clock';

function App() {
  return (
    <div className="App">
   <Home/>
   <Count/>
   <Clock/>
    </div>
  );
}

export default App;
