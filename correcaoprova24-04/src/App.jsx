import './App.css'
import Cabecalho from './components/Cabecalho'
import Evento from './components/Evento'
import Galeria from './components/Galeria'
import Rodape from './components/Rodape'

function App() {

  return (
    <>
      <Cabecalho />
      <Evento 
        titulo={'Evento do Senai'}
        descricao={"Descrição do evento"}
        horario={"dia 20 as 12 h"}
        local={"sala de aula"}
      />
      <Galeria />
      <Rodape />
    </>
  )
}

export default App
