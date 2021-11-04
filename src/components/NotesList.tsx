import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ResponseData {
  data: []
}

interface Entry {
  id: number;
  type: string;
  content: string;
  date: string;
  prevState: null;
}

const EntryList: React.FC = () => { 
  const [entries, setEntries] = useState<Entry[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ResponseData = await axios.get('http://localhost:3001/entries')
        const response: Entry[] = data.data
        setEntries(response)
      } catch (error) {
        console.log(error)
      }
    }
    
    fetchData()
  }, [])

  return (
    <ul>
      { entries &&
        entries.map(entry => (
          <li key={entry.id}>
            <p>{entry.date}</p>
            <p>{entry.content}</p>
          </li>
        ))
      }
      <li>test</li>
    </ul>
  )
}

export default EntryList;