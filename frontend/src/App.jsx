import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
import './App.css'
const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
