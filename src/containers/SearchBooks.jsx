import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../redux/actions/actionFetchBooks";
import { addBook } from "../redux/actions/actionAddBooks";

const SearchBooks = () => {
  const [title, setTitle] = useState("");

  const state = useSelector((state) => state.search);
  const dispatch = useDispatch();

  console.log(state);

  const displayFetchedBooks = state.isLoading ? (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : state.error !== "" ? (
    <div className="alert alert-danger" role="alert">
      {state.error}
    </div>
  ) : (
    state.fetchedBooks.map((book) => {
      return (
        <Fragment>
          <div className="card mt-3 mb-3" key={book.id}>
            <div className="row no-gutters">
              <div className="col-md-4">
                {book.volumeInfo.hasOwnProperty("imageLinks") && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    className="card-img"
                  />
                )}
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{book.volumeInfo.title}</h5>
                  <h6 className="card-subtitle mb-2">
                    {book.volumeInfo.authors}
                  </h6>
                  <p className="card-text">{book.volumeInfo.description}</p>
                  <a
                    href={book.volumeInfo.previewLink}
                    className="btn btn-outline-primary mr-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    En savoir plus...
                  </a>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      handleSave(book.volumeInfo.title, book.volumeInfo.authors)
                    }
                  >
                    Enregistrer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    })
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchBooks(title));
  };

  const handleSave = (title, author) => {
    const bookToSave = { title, author };
    dispatch(addBook(bookToSave));
  };

  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Recherchez un livre dans Google</p>

          <form
            className="form-inline justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                placeholder="Titre du livre..."
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button className="btn btn-outline-primary ml-3">
                Rechercher
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container" style={{ minHeight: "200px" }}>
        <div className="accordion">{displayFetchedBooks}</div>
      </div>
    </main>
  );
};

export default SearchBooks;
