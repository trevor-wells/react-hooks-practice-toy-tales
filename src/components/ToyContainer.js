import React from "react";
import ToyCard from "./ToyCard";

export default function ToyContainer({toys, setToys}) {
  
  const myToyCards = toys.map(toy =>
    <ToyCard
      key={toy.id}
      toy={toy}
      setToys={setToys}
    />)
  
  return (
    <div id="toy-collection">{myToyCards}</div>
  )
}
