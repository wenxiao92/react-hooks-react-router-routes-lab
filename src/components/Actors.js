import React from "react";
import { actors } from "../data";

function Actors() {
  //console.log(actors)
  const displayActors = actors.map((act) => {
    return(
      <div key={act.name}>
      <h1>Name: {act.name}</h1>
      <div> Movies:
        <ul>
        {act.movies.map((movie) => (
          
            <li key={movie}>{movie}</li>
          
        ))}
        </ul>
        </div>
      </div>
    )
  })
  return <div>{displayActors}</div>;
}

export default Actors;
