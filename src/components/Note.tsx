import React from "react";

interface NoteProps {
  note: {
    date: string;
    content: string;
  }
}

const Note: React.FC<NoteProps> = ({ note }) => {
  return (
    <li>
      <p>{note.date}</p>
      <p>{note.content}</p>
    </li>
  )
}

export default Note