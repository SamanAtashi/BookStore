import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/cofigureStore';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';

import classes from './App.module.css';

const App = () => (
  <Provider store={store}>
    <div className={classes.container}>
      <Router>
        <div className={classes.panel_bg}>
          <h1>My BookStore</h1>
          <Link to="/">Books</Link>
          <Link to="/categories">Categories</Link>
        </div>
        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route exact path="/">
            <Books />
          </Route>
        </Switch>
      </Router>
    </div>
  </Provider>
);
export default App;
