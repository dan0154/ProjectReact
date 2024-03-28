import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import Header from '../components/Header'
import Lulus from '../components/Lulus'
import Sobre from './Sobre'
import Galeria2 from '../components/Galeria'
import Infos from '../components/Infos'

function Home() {
  const irPara = useNavigate(); //Precisa do const para criar uma função dentro de outra
  const handleClick = () => { //Arrow function -  boa prática quando uma função é criada dentro de outra 
    //Navegar para a página Sobre ao clicar em algum botão
    irPara('/Sobre');
  };
  return (
    <div>
      <Header />
      <Lulus />
      <button onClick={handleClick}>Saber mais</button>
      <Galeria2 />
      <Infos nome={"Daniel"} idade={"17"} escola={"Sesi"}></Infos>
      <Infos nome={"Gabriel"} idade={"17"} escola={"Sesi"}></Infos>
    </div>
  )
}

export default Home
