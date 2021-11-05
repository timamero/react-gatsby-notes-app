import axios from 'axios'

interface ResponseData {
  data: []
}

export interface NoteObj {
  id: number;
  type: string;
  content: string;
  date: string;
}

export const getAll = async (): Promise<NoteObj[] | void> => {
  try {
    const response: ResponseData = await axios.get('http://localhost:3001/notes')
    return response.data
  } catch (error) {
    console.log(error)
  }  
}

const notesServices = {
  getAll
}

export default notesServices