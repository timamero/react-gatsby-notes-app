import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Note from './Note';

interface ResponseData {
  data: []
}

interface NoteObj {
  id: number;
  type: string;
  content: string;
  date: string;
}

const EntryList: React.FC = () => { 
  const [notes, setNotes] = useState<NoteObj[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ResponseData = await axios.get('http://localhost:3001/notes')
        const response: NoteObj[] = data.data
        setNotes(response)
      } catch (error) {
        console.log(error)
      }
    }
    
    fetchData()
  }, [])

  return (
    <ul className="notes-wrapper container is-fluid">
      { notes && notes.length > 0 
        ?
        notes.map(note => (
          <Note key={note.id} note={note}/>
        ))
        :
        <li className="has-text-centered is-size-4">You do not have any notes😭. Go to Add Note to add some!</li>
      }
    </ul>
  )
}

export default EntryList;