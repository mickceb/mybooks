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

const url =
  "https://www.googleapis.com/books/v1/volumes?q={TITRE}&key={KEY}&maxResults=20";

export const fetchBooks = (title) => {
  return (dispatch) => {
    dispatch(fetchBooksLoading);
    axios
      .get(
        `
        
        `
      )
      .then(() => {})
      .catch(() => {});
  };
};
