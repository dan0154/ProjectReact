import { useState, useEffect } from "react";
import "../style/Pokemon.css"

export default function Pokemon(){
    const [ id, setId ] = useState(1) //iniciando id com valor 1
    const [ pokemon, setPokemon ] = useState(null) //iniciando dado pokemon com valor nulo

    const fetchData = async () => {
        try{
            const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokemon(data)
        } catch(error) {
            console.error("Erro: ", error)
        }
    } 

    useEffect(() => {
        fetchData()
    }, [id]
    );

    const nextPokemon = () => {
        setId(id+1);
    }

    const previousPokemon = () => {
        if(id > 1){
            setId(id-1);
        }
        
    }

    return(
        
        <div>
            
            {pokemon && (
                <div className="pokemon">
                    <p>{pokemon.name}</p>
                    <img src={pokemon.sprites.front_default}></img>
                    <div className="buttons">
                        <button className="button1" onClick={previousPokemon}>Previous</button>
                        <button className="button2" onClick={nextPokemon}>Next</button>
                    </div>

                </div>
            )
            
            }
        </div>
    )
}