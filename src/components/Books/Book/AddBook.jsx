import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../redux/books/books';
import { StoreApiSend } from '../../../API/api_connect';

import classes from './AddBook.module.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const AddBookHandler = async () => {
    const newBook = {
      id: uuidv4(),
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
    };

    if (document.getElementById('title').value !== '' && document.getElementById('author').value !== '') {
      await StoreApiSend(newBook.title, newBook.author, newBook.id);
      dispatch(addBook(newBook));
    } else {
      alert('Please fill both inputs!!!');
    }

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  };

  return (
    <div className={classes.formContain}>

      <form>
        <h2>ADD NEW BOOK</h2>
        <input className={classes.title} id="title" type="text" name="Title" placeholder="Title" />
        <input className={classes.author} id="author" type="text" name="Author" placeholder="Author" />
        <input className={classes.button} type="button" value="Add" onClick={AddBookHandler} />
      </form>
    </div>
  );
};

export default AddBook;
