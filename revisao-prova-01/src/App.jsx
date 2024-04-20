import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./styles/styles.css"
import Footer from './components/Footer'
import Header from './components/Header'
import Gallery from './components/Gallery'

function App() {
  return (
    <>
      <Header />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
