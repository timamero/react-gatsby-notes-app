import axios from 'axios'

interface ResponseData {
  data: []
}

export interface NoteObj {
  id: number;
  content: string;
  date: string;
}

const getAll = async (): Promise<NoteObj[] | void> => {
  try {
    const response: ResponseData = await axios.get('http://localhost:3001/notes')
    return response.data
  } catch (error) {
    console.log(error)
  }  
}

const create = async (note: NoteObj): Promise<NoteObj[] | void> => {
  try {
    await axios.post('http://localhost:3001/notes', note)
  } catch (error) {
    console.log(error)
  }
}

const deleteObj = async (id: number): Promise<{} | void> => {
  try {
    await axios.delete(`http://localhost:3001/notes/${id}`)
  } catch (error) {
    console.log(error)
  } 
}

const notesServices = {
  getAll,
  deleteObj,
  create
}

export default notesServices