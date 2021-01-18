import React from "react";

const SearchBooks = () => {
  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Recherchez un livre dans Google</p>

          <form className="form-inline justify-content-center">
            <div className="form-group">
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                placeholder="Titre du livre..."
                required
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
        <div className="accordion">
          <div className="card mb-2">
            <div className="card-header"></div>
            <div className="collapse" data-parent="accordion">
              <div className="card-body">
                {/* 
          - Image
          - Titre
          - Auteur
          - Description
          - Btn plus d'info
          - Btn enregistrer
          */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchBooks;
