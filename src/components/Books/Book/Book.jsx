import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, addBook } from '../../../redux/books/books';
import { StoreApiReceive, StoreApiRemove } from '../../../API/api_connect';

import classes from './Book.module.css';
import bar from '../../../Assets/circular-progress.png';

const Book = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.booksReducer);

  const removeBookHandler = (book, id) => {
    StoreApiRemove(id);
    dispatch(removeBook(book));
  };

  const retrieveFromApi = async () => {
    const myObj = await StoreApiReceive();

    // transform obj
    const keys = Object.keys(myObj);
    const vals = Object.values(myObj);
    const book = keys.map((_, idx) => (
      {
        id: keys[idx],
        author: vals[idx][0].category,
        title: vals[idx][0].title,
      }
    ));

    book.forEach((book) => {
      dispatch(addBook(book));
    });
  };

  useEffect(() => {
    retrieveFromApi();
  }, []);

  return books.map((bookObj) => (
    <li key={bookObj.id} className={classes.item}>

      <div className={classes.oval}>
        <p>{`${bookObj.title} -- ${bookObj.author} `}</p>
        <img src={bar} alt="bar" />
      </div>
      <p className="perc">60%</p>
      <button className={classes.del} type="button" onClick={() => removeBookHandler(bookObj, bookObj.id)}>remove</button>
    </li>
  ));
};
export default Book;
