import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabs } from '../redux/features/searchSlice';

const Tabs = () => {
    const tabs=['photos','videos'];

    const dispatch=useDispatch()
    const activeTab=useSelector((state)=>state.search.activeTab)

  return (
    <div className='flex gap-8 p-10 justify-center'>
        {tabs.map((elem,idx)=>{
            return <button 
            onClick={()=>{
                dispatch(setActiveTabs(elem))
            }}
            className={`${(activeTab==elem?'bg-violet-700 text-white':'bg-gray-100 text-gray-600')} px-5 py-2 cursor-pointer active:scale-95 rounded uppercase`} key={idx}>{elem}</button>
        })}
    </div>
  )
}

export default Tabs