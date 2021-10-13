import './App.css';
import Nav from './components/Nav';

import MovieProfile from './components/MovieProfile';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Nav} />
          <Route exact path="/movie/:id" component={MovieProfile} />
      </Switch>
    </div>
  );
}

export default App;
