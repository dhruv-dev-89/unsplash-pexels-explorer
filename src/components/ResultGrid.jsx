import React, { useEffect } from 'react'
import { fetchPhotos,fetchVideos } from '../api/mediaApi'
import { setActiveTabs,setError,setLoading,setQuery,setResults } from '../redux/features/searchSlice'
import { useSelector, useDispatch } from 'react-redux'
import ResultCard from './ResultCard'


const ResultGrid = () => {

    const {query,activeTab,results,loading,error}=useSelector((store)=>store.search)
    const dispatch=useDispatch()
    
    useEffect(()=>{
        const searchQuery = query.trim() || "nature";
        const getData=async ()=>{
            try {
                dispatch(setLoading());
                let data=[];
                if(activeTab=='photos'){
                    let response=await fetchPhotos(searchQuery);
                    data=response.results.map((item)=>({
                        id:item.id,
                        type:'photo',
                        title:item.alt_description,
                        thumbnail:item.urls.small,
                        src:item.urls.full,
                        url:item.links.html
                    }))
                }
                if(activeTab=='videos'){
                    let response =await fetchVideos(searchQuery);
                    data=response.videos.map((item)=>({
                        id:item.id,
                        type:'video',
                        title:item.user.name ||"video",
                        thumbnail:item.image,
                        src:item.video_files[0].link,
                        url:item.url
                    }))
                }
                dispatch(setResults(data))
            } catch (error) {
                dispatch(setError(error.message))
            }
        }
        getData()
    },[query,activeTab])

    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading...</h1>

  return (
    <div className='flex flex-wrap justify-evenly lg:justify-between w-full gap-6 overflow-auto py-6 px-5 cursor-default'>
        {results.map((item,idx)=>{
            return <div className='rounded-xl overflow-hidden cursor-default' key={idx}>
                <a target='_blank' href={item.url}><ResultCard item={item}/></a>
            </div>
        })}
    </div>
  )
}

export default ResultGrid