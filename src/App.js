import React from "react";
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";
import FriendDetails from "./components/FriendDetails/FriendDetails";


function App() {

  return (
    <Router >
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/friend/:friendId">
          <FriendDetails />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
