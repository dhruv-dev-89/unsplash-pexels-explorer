import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection,addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({item}) => {
    const dispatch=useDispatch()
    const addToCollection=(item)=>{
        dispatch(addCollection(item))
        dispatch(addedToast())
    }
  return (
    <div className='w-[35vw] lg:w-[18vw] relative h-50 lg:h-75 bg-white cursor-default'>
        <div className='h-full cursor-default'>
            {item.type=='photo'?<img   className='h-full w-full object-cover object-center' src={item.src} alt="" />:''}
            {item.type=='video'?<video className='h-full w-full object-cover object-center' autoPlay loop  muted src={item.src} ></video>:''}
        </div>
        <div id='bottom' className='absolute  w-full flex gap-3 justify-between items-center px-4 py-8 bottom-0 text-white'>
            <h2 className='text-sm h-10 overflow-hidden capitalize font-bold'>{item.title}</h2>
            <button
            onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                addToCollection(item);
            }} className='bg-white/90 text-violet-700 text-sm font-medium px-4 py-1.5 rounded-md hover:bg-white transition-colors cursor-pointer'>Save</button>
        </div>
    </div>
  )
}

export default ResultCard