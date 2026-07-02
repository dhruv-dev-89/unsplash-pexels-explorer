import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';


const SearchBar = () => {

    const [text, setText] = useState("");

    const dispatch = useDispatch();
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(setQuery(text));
        setText("")
    }
  return (
    <div className=''>
        <form onSubmit={(e)=>{
            submitHandler(e);
        }}
        className='flex bg-(--color-bg-soft) gap-5 justify-center  p-10'>
            <input 
            onChange={(text)=>{
                setText(text.target.value);
            }}
            value={text}
            className='w-full px-4 py-3 border border-gray-200 rounded-md text-gray-900 placeholder-gray-500 focus:border-violet-700 focus:ring-2 focus:ring-violet-100 focus:outline-none'
            type="text" 
            placeholder='search anything...' />
            <button
            className='bg-violet-700 active:scale-95 text-white font-semibold px-6 py-3 rounded-md hover:bg-violet-800'>
            Search
            </button>
        </form>
    </div>
  )
}

export default SearchBar