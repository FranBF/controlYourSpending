import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { SubForm } from '../components/SubForm'
import { Link } from 'react-router-dom'

export function Home () {
  const { currentUser } = useSelector(state => state.user)
  const [entries, setEntries] = useState([])
  const PROD = 'https://api-controlyoursaving.onrender.com'
  const DEV = 'http://localhost:3000'

  useEffect(() => {
    const fetchEntries = async () => {
      const res = await axios.get(`${PROD}/api/entries`, { withCredentials: true })
      setEntries(res.data)
    }
    fetchEntries()
  }, [currentUser])

  return (
    <div className='w-full flex items-center justify-center h-full flex-col'>
      {currentUser && (
        <table className='border-2 border-black w-1/2 text-center'>
          <thead>
            <tr className='border-black border-2'>
              <th className='border-2 border-black'>Name</th>
              <th className='border-2 border-black'>Desc</th>
              <th className='border-2 border-black'>Price</th>
              <th className='border-2 border-black'>Periodity</th>
              <th className='border-2 border-black'>DueDate</th>
            </tr>
          </thead>
          {entries.map(entry => (
            <tbody key={entry._id}>
              <tr>
                <td className='border-2 border-black'>{entry.name}</td>
                <td className='border-2 border-black'>{entry.description}</td>
                <td className='border-2 border-black'>{entry.price}</td>
                <td className='border-2 border-black'>{entry.periodity}</td>
                <td className='border-2 border-black'>{entry.dueDate}</td>
              </tr>
            </tbody>
          ))}
        </table>)}
      <Link className='mt-5 w-full flex justify-center' to='entry'>
        <button className='bg-red-200 w-1/6 rounded-lg h-12'>New entry</button>
      </Link>
    </div>
  )
}
