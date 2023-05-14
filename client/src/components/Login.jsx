import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function Login () {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const dispatch = useDispatch()
  const { currentUser } = useSelector(state => state.user)
  const navigate = useNavigate()
  const PROD = 'https://api-controlyoursaving.onrender.com'
  const DEV = 'http://localhost:3000'

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(loginStart())
    try {
      const res = await axios.post(`${PROD}/api/signin`, { username, password }, {
        headers: {
          Authorization: 'Bearer access_token'
        },
        withCredentials: true
      })
      dispatch(loginSuccess(res.data))
      navigate('/')
    } catch (error) {
      dispatch(loginFailure(error))
    }
  }
  return (
    <div className='flex justify-center items-center w-full h-full bg-blue-200'>
      <div className='flex w-1/3 rounded-lg h-1/2 bg-yellow-200 items-center justify-around flex-col'>
        <p className='text-2xl font-bold underline'>Login</p>
        {currentUser && <p>{currentUser.username}</p>}
        <div className='flex flex-col justify-center items-center w-full'>
          <label>Username</label>
          <input type='text' className='mt-2 rounded-md w-3/4 border-2 border-black' onChange={e => setUsername(e.target.value)} />
          <label className='mt-8'>Password</label>
          <input type='password' className='mt-2 rounded-md w-3/4 border-2 border-black' onChange={e => setPassword(e.target.value)} />
        </div>
        <button className='w-1/2 bg-blue-300 rounded-full h-10 hover:h-12 hover:border-2 hover:border-black' onClick={handleLogin}>Next</button>
      </div>
    </div>
  )
}
