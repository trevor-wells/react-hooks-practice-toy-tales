import React, {useState} from "react"

export default function ToyForm({setToys}) {

  const [formData, setFormData] = useState({
    name: "",
    image: ""
  })

  function handleChange(event){
    const {name, value} = event.target
    setFormData(prevData => ({...prevData, [name]: value}))
  }

  console.log(formData)

  function handleSubmit(event){
    event.preventDefault()

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => setToys(prevToys => ([...prevToys, data])))

    setFormData({name: "", image: ""})
  }

  return (
    <div className="container">
      <form
        className="add-toy-form"
        onSubmit={handleSubmit}
      >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
          value={formData.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
          value={formData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  )
}
