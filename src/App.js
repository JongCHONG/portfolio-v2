import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
