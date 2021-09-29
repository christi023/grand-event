import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route />
      </Switch>
    </Router>
  );
}

export default App;
