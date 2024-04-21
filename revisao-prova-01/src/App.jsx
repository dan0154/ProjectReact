import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./styles/styles.css"
import Footer from './components/Footer'
import Header from './components/Header'
import Gallery from './components/Gallery'
import ListItems from './components/ListItems'

function App() {
  return (
    <>
      <div className='content'>
        <Header />
        <Gallery />
        <div className='list'>
          <ListItems item1={"Leclerc, Charles"} item2={"26 y"} />
          <ListItems item1={"Sainz, Carlos"} item2={"29 y"} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
