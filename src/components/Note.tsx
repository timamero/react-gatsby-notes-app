import React from "react";

interface NoteProps {
  note: {
    date: string;
    content: string;
  }
}

interface DateTimeFormat {
  year: 'numeric' | '2-digit';
  month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day: 'numeric' | '2-digit';
}

const Note: React.FC<NoteProps> = ({ note }) => {
  // var utcSeconds = Date.parse(note.date);
  

  const dateOptions: DateTimeFormat = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const date = new Date(Date.parse(note.date));
  const formattedDate = date.toLocaleDateString('en-us', dateOptions)

  return (
    <li>
      <p className="is-size-5 has-text-weight-semibold	">{formattedDate}</p>
      <p>{note.content}</p>
      <button className="button is-danger is-light">Delete</button>
    </li>
  )
}

export default Note