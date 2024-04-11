import { useState, version } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
//useState adiciona um estado ao nosso componente
//nesse caso, o contador está iniciando com estado 0

  const [botao, botaoClicado] = useState(false)
  const handleButtonClick = () => (
    botaoClicado(true)
  )

  const handleButtonCount = () => (
    setCount(count + 1)
  )

  const[contador, setContador] = useState(0)
  const[clicar, setClicar] = useState(false)

  const handleBotaoClicar = () => {
    setContador(contador+1)
    setClicar(true)
  }

  const handleBotaoResetar = () => {
    setContador(0)
    setClicar(false)
  }

  return (  
    <>
      <h1>Botão contador</h1>
      <button onClick={handleBotaoClicar}>Clique aqui</button>
      {clicar ? (
        <p>Botão foi clicado {contador} vezes</p>
      ):(
        <p>O botão ainda não foi clicado</p>
      )
      }

      <button onClick={handleBotaoResetar}>Resetar</button>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

      <button onClick={handleButtonClick}>Clique aqui</button>
      {botao &&<p>O botão foi clicado</p> } {/* Se foi clicado, coloca esse parágrafo */}

      <button onClick={handleButtonCount}>Clique Aqui</button>
      <p>O botão foi clicado {count} vezes</p>
    </>
  )
}

export default App
