import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/cofigureStore';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';
import AddBook from './components/Books/Book/AddBook';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Welcome to BookStore</h1>
      <Router>
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route exact path="/">
            <Books />
          </Route>
        </Switch>
      </Router>
      <AddBook />
    </div>
  </Provider>
);
export default App;
