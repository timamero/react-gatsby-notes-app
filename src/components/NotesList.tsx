import React, { useEffect, useState } from 'react'
import notesServices from '../services/NotesServices'
import { NoteObj } from '../services/NotesServices'
import Note from './Note'

const EntryList: React.FC = () => { 
  const [notes, setNotes] = useState<NoteObj[] | null | void>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allNotes = await notesServices.getAll()
        setNotes(allNotes)
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