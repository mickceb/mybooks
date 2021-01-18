import {
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
} from "../constants";
import axios from "axios";

const fetchBooksLoading = () => {
  return {
    type: FETCH_BOOKS_LOADING,
  };
};

const fetchBooksSuccess = (data) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: data,
  };
};

const fetchBooksError = (message) => {
  return {
    type: FETCH_BOOKS_ERROR,
    payload: message,
  };
};

const GOOGLE_API_KEY = "AIzaSyBSKmODgy0ado5JOAdDTWQ88a6xDpxCGMY";

/* const GOOGLE_API_KEY = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
}; */

console.log(GOOGLE_API_KEY);

export const fetchBooks = (title) => {
  return (dispatch) => {
    dispatch(fetchBooksLoading());
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${GOOGLE_API_KEY}&maxResults=20`
      )
      .then((res) => {
        const booksItemsArray = res.data.items;
        dispatch(fetchBooksSuccess(booksItemsArray));
      })
      .catch((error) => {
        dispatch(fetchBooksError(error.message));
      });
  };
};
