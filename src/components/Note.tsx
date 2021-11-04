import React from "react";
import axios from 'axios';

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
        await axios.delete(`http://localhost:3001/notes/${id}`)
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
    <li className="card">
      <p className="is-size-5 has-text-weight-semibold	">{formattedDate}</p>
      <p>{note.content}</p>
      <button className="button is-danger is-light" onClick={handleDeleteClick}>Delete</button>
    </li>
  )
}

export default Note