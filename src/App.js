import './App.css';
import SelectBus from './components/SelectBus';
import Autobus from './img/autobus.svg';
import LivePost from './components/LivePost';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

/* firebase.initializeApp(){
  var firebaseConfig = {
    apiKey: "AIzaSyC4vajhOmF5VIz7rbpQZAvGVCxX8butwR8",
    authDomain: "getat-bus.firebaseapp.com",
    projectId: "getat-bus",
    storageBucket: "getat-bus.appspot.com",
    messagingSenderId: "495811298719",
    appId: "1:495811298719:web:113df861c741d559aaa9aa"
  };

  firebase.initializeApp(firebaseConfig);
} */

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
