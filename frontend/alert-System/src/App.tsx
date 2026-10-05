import { useState } from 'react'
import './App.css'
import WelcomePage from './pages/WelcomePage'
import AlertsMap from './components/AlertsMap/AlertsMap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WelcomePage/>
  {/* <AlertsMap alerts={<AlertsList}/> */}
    </>
  )
}

export default App
