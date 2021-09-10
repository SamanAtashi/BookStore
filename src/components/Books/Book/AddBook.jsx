import React from 'react';
import uuid from 'react-uuid'

uuid()


// import useDispatch hook
import { useDispatch } from 'react-redux';
// import your Action Creators
import {addBook, removeBook} from '../../../redux/books/books';

const AddBook = () => {
const dispatch = useDispatch();

const submitBookToStore = () => {
    const newBook = {
        id:
        title,
        author
    }

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
}

return (
  <form>
    <input type="text" name="Title" placeholder="Title" />
    <input type="text" name="Author" placeholder="Author" />
    <input type="button" value="Add" onClick={submitBookToStore} />
  </form>)
};

export default AddBook;


...
