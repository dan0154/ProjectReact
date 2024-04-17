import React from "react";
import Imagem from "./Imagem";
import "../styles/styles.css"

export default function Flexbox(){
    return(
        <section>
            <div className="one">
                <p>Item 1</p>
            </div>
            <div className="two">
                <p>Item 2</p>
                <Imagem src={"https://png.pngtree.com/png-vector/20230111/ourmid/pngtree-an-atom-vector-icon-png-image_6559126.png"} />
            </div>
            <div className="three">
                <p>Item 3</p>
            </div>
        </section>
    )
}