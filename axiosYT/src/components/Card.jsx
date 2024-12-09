import React from 'react'


const Card = ({movieData}) => {
        return (
          <div className="card">
            <img className="card-poster" src={movieData.Poster} alt={`${movieData.title} Poster`} />
            <div className="card-content">
              <h2 className="card-title">{movieData.Title}</h2>
              <p className="card-type">{movieData.Type}</p>
              <p className="card-year">{movieData.Year}</p>
            </div>
          </div>
        );
}

export default Card
