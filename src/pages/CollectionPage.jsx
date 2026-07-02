import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCollection, removeCollection } from '../redux/features/collectionSlice';

const CollectionPage = () => {
  const dispatch=useDispatch();
  const images=useSelector(state => state.collection.items);
  
  return (
    <div className='mb-5'>
      <div className='flex justify-between mx-3.5 items-center'>
        <h1 className='text-black text-center text-3xl lg:text-5xl font-bold mt-4'>Your Collection</h1>
        <button 
        onClick={()=>{
          dispatch(clearCollection());
        }}
         className='text-white cursor-pointer mt-4.5  active:scale-95 rounded-xl bg-violet-800 py-2 px-1 lg:px-2 lg:py-3'>Clear collection</button>
      </div>
      {images.length==0 ?(
    <h1 className="text-center my-50  text-black text-2xl lg:text-3xl">
        No items in your collection 😔
    </h1>
):(
      <>
      <div className='flex  flex-wrap gap-10 mx-8 lg:mx-20 mt-8 lg:mt-5 '>
        {images.map((image,idx)=>{
        return <div key={idx} className='relative flex flex-col rounded-xl overflow-hidden'>
          <img className='size-40 lg:size-60' src={image.src} alt="" />
          <div id='bottom' className='absolute  w-full flex gap-3 justify-between items-center px-4 py-8 bottom-0 text-white'>
            <h2 className='text-sm h-10 overflow-hidden capitalize font-bold'>{image.title}</h2>
            <button
            onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                dispatch(removeCollection(image.id));
            }} className='bg-white/90 text-violet-700 text-sm font-medium px-4 py-1.5 rounded-md hover:bg-white transition-colors cursor-pointer'>Remove</button>
        </div>
          
        </div>
      })}
      
          
      </div>
      </>
      )
    }
    </div>
  )
}

export default CollectionPage