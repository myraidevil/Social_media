import React, { use } from 'react'
import { assets, dummyUserData } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { UserButton, useClerk } from '@clerk/clerk-react'
import MenuItems from './MenuItems'
import { CirclePlus, LogOut } from 'lucide-react'

const SideBar = ({sidebarOpen, setSidebarOpen}) => {

        const navigate = useNavigate()
        const  user  = dummyUserData
        const { signOut } = useClerk()


  return (
    <div className={`w-60 xl:w-72 bg-white border-r border-gray-200 h-screen flex flex-col justify-between items-center max-sm:absolute top-0 bottom-0 z-20 ${sidebarOpen ? 'translate-x-0' : 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out`}>
        <div className='w-full'>
            <img onClick={() => navigate('/') } src={assets.logo} className='w-26 ml-7 my-2 cursor-pointer' alt="logo" />
            <hr className='border-gray-300 mb-8'/>

            <MenuItems setSidebarOpen={setSidebarOpen} />
            
            <Link to='/create-post' className='flex items-center justify-center gap-2  py-2.5 mt-6 mx-6 rounded-lg  bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-800 active:scale-95 transition cursor-pointer '>
                <CirclePlus  className='w-5 h-5'/>
                Create Post
            </Link>

        </div>
        <div className='w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between'>
            <div className='flex items-center gap-2 cursor-pointer'>
                <UserButton />
                <div >
                    <h1 className='font-medium text-sm'>{user.full_name}</h1>
                    <p className='text-gray-500 text-xs'>@{user.username}</p>
                </div>
            </div>
            <LogOut onClick={signOut} className='w-4 text-gray-400 hover:text-gray-700 transition cursor-pointer ' />
        </div>
    </div>
  )
}

export default SideBar