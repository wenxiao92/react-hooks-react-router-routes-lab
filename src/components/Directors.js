import React from "react";
import { directors } from "../data";

function Directors() {
  //console.log(directors)
  const displayDirectors = directors.map((dir) => {
    return(
      <div key={dir.name}>
      <h1>Name: {dir.name}</h1>
      <div> Movies:
      <ul>
        <div>
          {dir.movies.map((movie) => {
            return(
              <li key={movie}>{movie}</li>
            )
          })}
        </div>
      </ul>
      </div>
      </div>
    )
  })

  return <div>{displayDirectors}</div>;
}

export default Directors;
