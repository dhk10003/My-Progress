import { FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import EditTutorial from "./EditTutorial"
import { useState } from "react"

const TutorialList = ({tutorials, getTutorials, baseurl, axios}) => {
  // This is only showing dummy data:
  // const tutorials = [
  //   {
  //     id: 1,
  //     title: "JS",
  //     description: "JS is a programming language",
  //   },
  //   {
  //     id: 2,
  //     title: "React",
  //     description: "JS library for UI design",
  //   },
  // ]

  const [id, setId] = useState('')

  // Edit tutorial:
  const editTutorial = async (id, title, description) => {
    try{
      console.log(baseurl, id,title, description)
      await axios.put(`${baseurl}${id}/`, {title, description})
    } catch (err){
      console.log(err)
    }
    getTutorials()
  }

  // Delete tutorial:
  const deleteTutorial = async (id) => {
    try{
      console.log(baseurl+id)
      await axios.delete(`${baseurl}${id}`)
    } catch (err){
      console.log(err)
    }
    getTutorials()
  }

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-tutor"
                    onClick={() => setId(id)}
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={()=> deleteTutorial(id)}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <EditTutorial editTutorial={editTutorial} id={id}/>
    </div>
  )
}

export default TutorialList
