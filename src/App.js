import './App.css';
import MainHomeComponent from './components/Home/MainHomeComponent';
import Login from './components/login/Login';
import HomeDash from './components/dashboard/HomeDash';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sneakers from './components/frontendMentor/Sneakers.js';
import Demo from './components/frontendMentor/Demo';
import Auth from './components/Auth';

function App() {
  return (
    <Router>
    <div className="App">
    <div className='content'>
      <Switch>
        <Route exact path='/'>
        <MainHomeComponent />
        </Route>
        <Route  path='/login'>
        <Login />
        </Route>
        <Route  path='/dashboard'>
        <HomeDash />
        </Route>
        <Route  path='/sneakers'>
        <Sneakers />
        </Route>
        <Route  path='/demo'>
        <Demo />
        </Route>
        <Route  path='/auth'>
        <Auth />
        </Route>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
