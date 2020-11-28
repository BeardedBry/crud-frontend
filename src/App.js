import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './screens/Login';
import TodoList from './screens/TodoList';

import { GlobalContext } from './GlobalContext';


function App() {

  const { loggedIn } = React.useContext(GlobalContext);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/todo">
            <TodoList />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
