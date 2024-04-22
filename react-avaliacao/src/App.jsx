import Footer from "./components/Footer"
import Galeria from "./components/Galeria"
import Header from "./components/Header"
import Infos from "./components/Infos"
import "./style/style.css"
import React from "react"


function App() {
  return (
    <>
      <Header />
      <Infos title={"Evento Senai"} description={"Melhor evento dos mundos"} time={"30/02/2025 8:99"} local={"Senai de Palhoça"} imgSrc={"reuniao.jpg"}/>
      <hr></hr>
      <Galeria />
      <Footer name={"Daniel"} schoolClass={"3B"}/>
    </>
  )
}

export default App
