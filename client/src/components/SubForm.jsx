import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function SubForm () {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [periodity, setPeriodity] = useState('')
  const [dueDate, setDueDate] = useState('')
  const navigate = useNavigate()
  const PROD = 'https://api-controlyoursaving.onrender.com'
  const DEV = 'http://localhost:3000'

  const handleInsert = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${PROD}/api/entry`, { name, description, price, periodity, dueDate }, {
        headers: {
          Authorization: 'Bearer access_token'
        },
        withCredentials: true
      })
      navigate('/')
    } catch (error) {
    }
  }

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <label>Name</label>
      <input className='border-2 border-black w-1/4 rounded-lg' type='text' onChange={e => setName(e.target.value)} />
      <label>Description</label>
      <input className='border-2 border-black w-1/4 rounded-lg' type='text' onChange={e => setDescription(e.target.value)} />
      <label>Price</label>
      <input className='border-2 border-black w-1/4 rounded-lg' type='number' onChange={e => setPrice(e.target.value)} />
      <label>Periodity</label>
      <input className='border-2 border-black w-1/4 rounded-lg' type='text' onChange={e => setPeriodity(e.target.value)} />
      <label>Date</label>
      <input className='border-2 border-black w-1/4 rounded-lg' type='text' onChange={e => setDueDate(e.target.value)} />
      <button className='mt-4 bg-red-200 w-1/6 rounded-lg h-12' onClick={handleInsert}>Insert</button>
    </div>
  )
}
