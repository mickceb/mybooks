import React, { useState } from "react";
import { connect } from "react-redux";
import { addBook, deleteBook } from "../redux/actions/actionAddBooks";
import FlipMove from "react-flip-move";

const AddBooks = ({ libraryData, addBook, deleteBook }) => {
  console.log(libraryData);

  const initialState = {
    title: "",
    author: "",
  };

  const [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(data);

    // reset input
    setData(initialState);
  };

  const displayBooks = (
    <FlipMove>
      {libraryData.length > 0 ? (
        libraryData.map((item) => {
          return (
            <li
              className="list-group-item list-group-item d-flex justify-content-between"
              key={item.id}
            >
              <span>
                <strong>Titre: </strong>
                {item.title}
              </span>
              <span>
                <strong>Auteur: </strong>
                {item.author}
              </span>
              <span
                className="btn btn-danger"
                onClick={() => deleteBook(item.id)}
              >
                X
              </span>
            </li>
          );
        })
      ) : (
        <p className="text-center">Aucun livre à afficher...</p>
      )}
    </FlipMove>
  );

  const deleteAllBooksBtn = libraryData.length > 0 && (
    <button className="btn btn-danger mt-4 mb-5">
      Effacer tous les livres
    </button>
  );

  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajoutez un livre à votre bibliothèque</p>

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
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="author"
                id="author"
                className="form-control ml-3"
                placeholder="Auteur du livre..."
                required
                value={data.author}
                onChange={(e) => setData({ ...data, author: e.target.value })}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-outline-primary ml-3">
                Ajoutez un livre
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container" style={{ minHeight: "200px" }}>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">{displayBooks}</ul>
            <div className="d-flex justify-content-center">
              {deleteAllBooksBtn}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    libraryData: state.library,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (param) => dispatch(addBook(param)),
    deleteBook: (id) => dispatch(deleteBook(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBooks);
