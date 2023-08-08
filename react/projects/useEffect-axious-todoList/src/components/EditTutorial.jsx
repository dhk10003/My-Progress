import React, {useState} from 'react'

const EditTutorial = ({id, editTutorial}) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className="modal" tabIndex="-1" id="edit-tutor">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input type='text' placeholder="please enter a new title:" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <input type='text' placeholder="please enter a new description:" value={description} onChange={(e)=>setDescription(e.target.value)}></input>
          </div>
          <div className="modal-footer">
            
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>

            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{editTutorial(id,title,description); setTitle(''); setDescription('')}}>
              Save changes
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default EditTutorial
