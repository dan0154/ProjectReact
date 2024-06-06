import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import "../style/Pokedex.css"
import Conteudo from "./Conteudo";
import styled from 'styled-components'
import { motion, useAnimate } from 'framer-motion'

const Spinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 4px solid #000000;
  border-top: 4px solid red;
  border-radius: 50%;  

`
function App() {
  const [Carregando, setCarregando] = useState(true)
  useEffect(() =>{
    const timer = setTimeout(() => {
      setCarregando(false)
    }, 3000)
    return () => clearTimeout(timer)
  },[])
  return (
    <>
    <div className="pokedex">
        <div className="center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png"></img>
        {Carregando ? (
          <Spinner
            animate= {{rotate: 360}}
            transition={{duration:1, repeat: Infinity, ease: 'linear'}}
          />
          ):(
            <Conteudo visivel={<Pokemon />}/>
          )
        }
        
      </div>
      
    </div>
      
    </>
  )
}

export default App
