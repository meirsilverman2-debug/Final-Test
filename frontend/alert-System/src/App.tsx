import { useState } from 'react'
import './App.css'
import WelcomePage from './pages/WelcomePage'
import AlertDisplayPage from './pages/AlertDisplayPage'
import { Route, Routes } from 'react-router'
import MapPage from './pages/MapPage'
import RequestPage from './pages/RequestPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
     
      <Route path='/' element={<WelcomePage/>}/>
      <Route path='/alerts' element={<AlertDisplayPage/>}/>
      <Route path='/map' element={<MapPage/>}/>
      <Route path='/requests' element={<RequestPage/>}/>
    
    </Routes>
    </>
  )
}

export default App
