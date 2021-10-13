import './App.css';
import Nav from './components/Nav';

import MovieProfile from './components/MovieProfile';
import { Switch, Route } from "react-router-dom";
import { useEffect } from 'react';

function App() {



  useEffect(()=>{
    alert('all the functionality are working fine but i worked on the project for hour and half cuz my laptob always surbrise me ')

  },[])
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
