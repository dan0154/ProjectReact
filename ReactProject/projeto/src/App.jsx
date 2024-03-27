import './App.css'
import Header from './components/Header'
import Lulus from './components/Lulus'
import Sobre from './components/Sobre'
import Galeria2 from './components/Galeria2'
import Infos from './components/Infos'

function App() {

  return (
    <div>
      <Header />
      <Lulus />
      <Sobre />
      <Galeria2 />
      <Infos nome={"Daniel"} idade={"17"} escola={"Sesi"}></Infos>
      <Infos nome={"Gabriel"} idade={"17"} escola={"Sesi"}></Infos>
    </div>
  )
}

export default App
