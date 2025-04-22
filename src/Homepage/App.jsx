import React from 'react'
import { Hero, Footer, About, Navbar, News, FAQ } from '../components'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <News />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
