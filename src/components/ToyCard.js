import React from "react"

export default function ToyCard({toy, setToys}) {
  const {id, name, image, likes} = toy
  
  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`, {method: "DELETE"})
    .then(response => response.json())
    .then(data => console.log(data))

    setToys(prevToys => prevToys.filter(toy => toy.id !== id))
  }

  function handleLike(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({...toy, likes: likes+1})
    })
    .then(response => response.json())
    .then(data => setToys(prevToys => prevToys.map(toy => toy.id === id ? data : toy)))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLike} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  )
}

