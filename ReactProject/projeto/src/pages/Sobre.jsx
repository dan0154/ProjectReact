// Importa o módulo React do pacote react
import React from 'react';
// Importa o hook useNavigate do pacote react-router-dom
import { useNavigate } from 'react-router-dom';
// Define a função do componente Sobre
function Sobre() {
  // Obtém a função de navegação usando o hook useNavigate
  const irPara= useNavigate();
  // Define a função handleClick que será chamada ao clicar no botão
  const handleClick = () => {
    // Navegar para a página Home ao clicar em algum botão
    irPara('/');
  };
  // Retorna a estrutura JSX da página inicial
  return (
    <div className='Sobre'>
      {/* Título da página inicial */}
      <h1>Página Sobre</h1>
      <p>Spitz-alemão-anão, também conhecida como lulu-da-pomerânia, é a menor variedade da raça spitz alemão. É nativa da Pomerânia, uma região que engloba parte da Alemanha e Polônia na Europa Central.</p> 
      {/* Botão para navegar para a página About ao ser clicado */}
      <button onClick={handleClick}>Ir para Home</button>
    </div>
  );
}
// Exporta o componente Home como padrão
export default Sobre;
