import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthorQuotes from './pages/autorQuotes'
import RandomQuotes from './pages/randomQuotes'


function App() {
 
  return (
    <Routes >
        <Route path="/" element={<RandomQuotes />} />
        <Route path="author/:author" element={<AuthorQuotes />} />
      </Routes>
  )
}

export default App
