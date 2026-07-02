import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
import { Route ,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import Navbar from './components/Navbar'
import { ToastContainer , toast, Slide} from  'react-toastify'

const App = () => {
  return (
    <div className=' h-screen text-white gap-2'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/collection' element={<CollectionPage/>}/>
      </Routes>
      <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
      />
    </div>
  )
}

export default App