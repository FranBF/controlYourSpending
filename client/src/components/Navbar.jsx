import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/userSlice'

export function Navbar () {
  const { currentUser } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <div className='w-full border-b-2 border-gray-200 h-16 flex items-center justify-between'>
      <div className='ml-4 text-[24px] font-bold'>Savings</div>
      <div className='mr-4' />
      {currentUser
        ? (
          <div className='flex w-1/4 justify-end'>
            <p className='mr-4'>{currentUser.username}</p>
            <p className='mr-4 hover:bg-blue-200 hover:cursor-pointer hover:rounded-md' onClick={handleLogout}>Logout</p>
          </div>
          )
        : <Link className='mr-3' to='/login'>Login</Link>}
    </div>
  )
}
