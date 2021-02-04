import './App.css';
import SelectBus from './components/SelectBus';
import Autobus from './img/autobus.svg';
import LivePost from './components/LivePost';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


function App() {
  return (

    <div className="App">
      <img src={Autobus} alt=""/>
      <hr/>
      <h1>GETAT.BUS</h1>
      <hr/>

      <Router>

        <Switch>

          <Route path="/home">
            <SelectBus />
          </Route>

          <Route path="/search">
            <SelectBus />
            <LivePost />
          </Route>

        </Switch> 
      </Router>
      
    </div>
  );
}

export default App;
