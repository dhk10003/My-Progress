import { useState } from "react"

const AddTutorial = ({axios, baseurl, getTutorials}) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")


  const handleSubmit = (e) => {
    // Nothing here yet
    // 1. this needs to prevent default
    e.preventDefault()
    // 2. this needs to create a new tutorial object
    const newTutorial = {
      title,
      description
    }
    // 3. this needs to send the new tutorial object to the API
    postTutorial(newTutorial)
    // 4. this needs to clear the form
    setTitle('')
    setDescription('')
  }

  const postTutorial = async (newTutorial) => {
    // This needs to post the new tutorial to the API
    try{
      await axios.post(baseurl, newTutorial)
    } catch (err){
      console.log(err)
    }
    getTutorials()
  }

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddTutorial
