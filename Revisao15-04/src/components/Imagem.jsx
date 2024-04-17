import React from "react";
import "../styles/styles.css"

export default function Imagem({src}){
    return(
        <div>
            <img src={src}></img>
        </div>
    )
}