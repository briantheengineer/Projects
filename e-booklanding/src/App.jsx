import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardSection from './components/CardSection'
import Phoneshow from './components/Phoneshow'
import Carrossel from "./components/Carrosel";
import Content from './components/Content'
import Footer from './components/Footer'
import CallToAction from './components/CallToAction'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <CardSection />
      <Phoneshow />
      <Carrossel />
      <Content />
      <CallToAction />
      <Footer/>
      
    </div>
  )
}

export default App
