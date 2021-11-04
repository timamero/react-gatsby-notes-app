import React from 'react';
import axios from 'axios';

interface Note {
  content: string;
  date: string;
  id: number;
}

const NewNote: React.FC = () => {
  const generateRandomNum = () => {
    return Math.floor((Math.random() * 1000))
  }

  const handleNoteSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      noteContent: { value: string };
    };
    const noteContent = target.noteContent.value;
    
    const noteObject = {
      content: noteContent,
      date: Date().toString(),
      id: generateRandomNum(),
    }

    const postData = async (obj: Note) => {
      try {
        await axios.post('http://localhost:3001/notes', obj)

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
            name="note-content" 
            id="noteContent"
            className="textarea is-hovered" 
            cols={30} 
            rows={10}
            placeholder="Enter note..."
          ></textarea>
        </div>
        <div className="block">
          <div className="control has-text-centered">
            <button className="button is-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewNote;