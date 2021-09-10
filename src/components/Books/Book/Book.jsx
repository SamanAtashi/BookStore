/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// import { removeBook } from '../../../redux/books/books';

const books = [
  { id: 1, name: 'book1' },
  { id: 2, name: 'book2' },
];

const Book = () => {
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    // dispatch(removeBook('newBook'));
  };

  return books.map((book) => (
    <li key={book.id}>
      {book.name}
      <button type="button" onClick={removeBookFromStore}>remove</button>
    </li>
  ));
};

books.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Book;
