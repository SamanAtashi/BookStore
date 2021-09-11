import React from 'react';

import Book from './Book/Book';
import AddBook from './Book/AddBook';

import classes from './Books.module.css';

const Books = () => (

  <>
    <ul className={classes.ul}>
      <Book />
    </ul>
    <AddBook />
  </>
);
export default Books;
