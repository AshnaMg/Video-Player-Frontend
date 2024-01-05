import { useState } from 'react'
import Landing from './pages/Landing'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/history' element={<WatchHistory />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
