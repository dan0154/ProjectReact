import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import "../style/Pokedex.css"
import Conteudo from "./Conteudo";
export default function Pokedex(){
    return(
        <div className="pokedex">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png"></img>
            <Conteudo visivel={<Pokemon />} />
            
        </div>
    )
}