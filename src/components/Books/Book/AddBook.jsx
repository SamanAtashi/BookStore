import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };

  return (
    <form>
      <input id="title" type="text" name="Title" placeholder="Title" />
      <input id="author" type="text" name="Author" placeholder="Author" />
      <input type="button" value="Add" onClick={submitBookToStore} />
    </form>
  );
};

export default AddBook;
