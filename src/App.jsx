import React from 'react'
import { Hero, Footer, Navbar, News, FAQ } from './components'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <News />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
