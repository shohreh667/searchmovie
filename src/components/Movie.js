import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE = 
"https://images-na.ssl-images-amazon.com/images/I/714hR8KCqaL._SY355_.jpg";


const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img width="200" alt={movie.Title} src={poster} />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};


export default Movie;