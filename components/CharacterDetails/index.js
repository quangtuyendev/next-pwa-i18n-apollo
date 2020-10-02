import React from 'react';

function CharacterDetails({ gender, name }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">{gender}</div>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;
