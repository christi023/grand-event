import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Calender from './Pages/Calender/Calender';
// style
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calender" component={Calender} />
      </Switch>
    </Router>
  );
}

export default App;
