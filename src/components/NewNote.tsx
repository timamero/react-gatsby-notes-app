import React from 'react'
import notesServices, { NoteObj } from '../services/NotesServices'
import { navigate } from "gatsby"


const NewNote: React.FC = () => {
  const generateRandomNum = () => {
    return Math.floor((Math.random() * 1000))
  }

  const handleNoteSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      noteContentInput: { value: string };
    };
    const noteContent = target.noteContentInput.value;
    
    const noteObject = {
      content: noteContent,
      date: Date().toString(),
      id: generateRandomNum(),
    }

    const postData = async (obj: NoteObj) => {
      try {
        await notesServices.create(obj)
        navigate('/')
      } catch (error) {
        console.log(error)
      }
    }
    postData(noteObject) 
  }

  return (
    <div>
      <h2 className="title is-5 has-text-centered">New Note</h2>
      <form onSubmit={handleNoteSubmit} className="container is-fluid">
        <div className="block">
          <textarea 
            name="note-contentInput" 
            id="noteContentInput"
            className="textarea is-hovered" 
            cols={30} 
            rows={10}
            placeholder="Enter note..."
          ></textarea>
        </div>
        <div className="block">
          <div className="control has-text-centered">
            <button id="submitNewNote" className="button is-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewNote;