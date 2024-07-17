import { useState } from 'react'
import Nav from './components/Nav'
import Post from './components/Post'
import './App.css'

function App() {
  const markup = `
  <h1>Hello, World!</h1>
  <p>This is a paragraph with some <strong>bold</strong> text.</p>
`;
  return (
    <>
    <div className='nav'>
      <Nav/>
    </div>
    <div className='post'>
      <Post markup={markup} />
    </div>
    </>
  )
}

export default App
