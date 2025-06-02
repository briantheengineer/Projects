import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardSection from './components/CardSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Hero />
      <CardSection />
    </div>
  )
}

export default App
