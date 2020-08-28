import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Copyright from './components/Copyright';
import NewsAppBar from './components/NewsAppBar';
import Add from './pages/Add';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { StoriesProvider } from './providers/StoriesProvider';
import { UserProvider } from './providers/UserProvider';

const App = () => {
  return (
    <UserProvider>
      <StoriesProvider>
        <Router>
          <NewsAppBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={Add} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
          <Copyright />
        </Router>
      </StoriesProvider>
    </UserProvider>
  );
};

export default App;
