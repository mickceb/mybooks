import React, { useState } from "react";

const AddBooks = () => {
  const initialState = {
    title: "",
    author: "",
  };

  const [data, setData] = useState(initialState);

  /* console.log(initialState);
  console.log(data); */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

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
            <ul className="list-group">
              <li className="list-group-item list-group-item d-flex justify-content-between">
                livres enregistré ici...
              </li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="btn btn-danger mt-4 mb-5">
                Effacer tous les livres
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddBooks;
