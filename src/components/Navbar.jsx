import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex flex-col lg:flex lg:flex-row lg:justify-between px-2 lg:px-6 bg-(--color-primary) py-3'>
        <h2 className='text-center font-semibold text-xl lg:text-3xl lg:font-bold py-3'>
            Media Search
        </h2>
        <div className='flex justify-center items-center gap-5'>
            <Link className='bg-white text-violet-700 active:scale-95 font-semibold px-4 py-2 rounded-md hover:bg-violet-50' to='/'>Search</Link>
            <Link className='bg-violet-800 text-white active:scale-95 font-semibold px-4 py-2 rounded-md hover:bg-violet-900' to='/collection'>Collection</Link>
        </div>
    </div>
  )
}

export default Navbar