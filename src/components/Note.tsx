import React from "react";
import notesServices from '../services/NotesServices';

interface NoteProps {
  note: {
    date: string;
    content: string;
    id: number;
  }
}

interface DateTimeFormat {
  year: 'numeric' | '2-digit';
  month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day: 'numeric' | '2-digit';
}

const Note: React.FC<NoteProps> = ({ note }) => {

  const handleDeleteClick = () => {
    const deleteData = async (id: number) => {
      try {
        await notesServices.deleteObj(id)
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    }
    deleteData(note.id)
  }

  const dateOptions: DateTimeFormat = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const date = new Date(Date.parse(note.date));
  const formattedDate = date.toLocaleDateString('en-us', dateOptions)

  return (
    <li className="note-item block">
      <div className="card">
        <div className="card-header">
          <p className="card-header-title is-size-5 has-text-weight-semibold	">{formattedDate}</p>
        </div>
        <div className="card-content">
          <p className="content">{note.content}</p>
        </div>
        <footer className="card-footer">
         <button className="delete-btn button is-small is-danger" onClick={handleDeleteClick}>Delete</button>
        </footer>
      </div>
    </li>
  )
}

export default Note