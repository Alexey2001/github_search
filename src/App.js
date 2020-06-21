import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { Alert } from './components/Alert';
import { AlertState } from './components/context/alert/AlertState';
import { GithubState } from './components/context/github/GithubState';
function App() {
  return (
    <GithubState>
      <AlertState>
      <Router>
    <Navbar/>
      <div className="container pt-4">
      <Alert alert={{text: 'Test Alert'}}/>
    <Switch>
      <Route  path="/"  exact component={Home} />
      <Route  path="/about" component={About} />
      <Route  path="/profile/:name" component={Profile} />
    </Switch>
    </div>
    </Router>
    </AlertState>
    </GithubState>
  );
}

export default App;
