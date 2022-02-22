import React from "react";
import { movies } from "../data";

function Movies() {
  //console.log(movies)
  const displayMovies = movies.map((eachMovie) => {
    return (
      <div key={eachMovie.name}>
      <h2>Name: {eachMovie.title}</h2>
      <div>Time: {eachMovie.time}</div>
      <br></br>
      <div>Genres: <ul> 
        {eachMovie.genres.map((eachGenre) => {
          return <li key={eachGenre}>{eachGenre}</li>
        })}
        </ul></div>
      </div>
        )
  })
  return <div>{displayMovies}</div>;
}

export default Movies;
