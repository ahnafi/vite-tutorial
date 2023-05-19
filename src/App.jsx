import { useEffect } from 'react'
import './App.css'

import LoginPage from './pages/login'
function App() {
  useEffect(()=>{
    document.title = "welcome strangers"
  },[])
  return (
    <div className='flex justify-center h-screen items-center'>
     <LoginPage></LoginPage>
    </div>
  )
}

export default App
