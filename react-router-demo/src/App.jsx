import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col h-screen justify-between'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
