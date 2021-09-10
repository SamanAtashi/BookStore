import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../../../redux/books/books';
// import { StoreApiReceive } from '../../../API/api_connect';

const Book = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.booksReducer);

  const removeBookHandler = (book) => {
    dispatch(removeBook(book));
  };

  return books.map((bookObj) => (
    <li key={bookObj.id}>
      {`${bookObj.title} -- ${bookObj.category} `}
      <button type="button" onClick={() => removeBookHandler(bookObj)}>remove</button>
    </li>
  ));
};
export default Book;
