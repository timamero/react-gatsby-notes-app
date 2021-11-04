import React from 'react';
import axios from 'axios';

interface ResponseData {
  data: Note
}

interface Note {
  noteContent: string;
  date: string;
  id: string;
}

const NewNote: React.FC = () => {
  const generateRandomNum = () => {
    return Math.floor((Math.random() * 1000))
  }

  const handleNoteSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    console.log('start submit')
    const target = event.target as typeof event.target & {
      noteContent: { value: string };
    };
    const noteContent = target.noteContent.value;

    const noteObject = {
      noteContent,
      date: Date().toString(),
      id: generateRandomNum().toString(),
    }

    const postData = async (obj: Note) => {
      try {
        const data: ResponseData = await axios.post('http://localhost:3001/entries', obj)
        const response: Note = data.data
        console.log('response', response)

      } catch (error) {
        console.log(error)
      }
    }

    postData(noteObject)
  }

  return (
    <div>
      <h2 className="title is-5">New Note</h2>
      <form onSubmit={handleNoteSubmit}>
        <textarea 
          name="note-content" 
          id="noteContent"
          className="textarea is-hovered" 
          cols={30} 
          rows={10}
          placeholder="Enter note..."
        ></textarea>
        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default NewNote;