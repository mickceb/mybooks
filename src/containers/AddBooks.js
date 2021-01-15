import React from "react";

const AddBooks = () => {
  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajoutez un livre à votre bibliothèque</p>

          <form action="" className="form-inline justify-content-center">
            <div className="form-group">
              <input
                type="text"
                name=""
                id=""
                className="form-control"
                placeholder="Titre du livre..."
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name=""
                id=""
                className="form-control ml-3"
                placeholder="Auteur du livre..."
                required
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
