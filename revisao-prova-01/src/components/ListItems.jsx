import React from "react";
import "../styles/styles.css"

export default function ListItems({item1, item2}){
    return(
        <div className="ListItems">
            <li>
                {item1}, {item2}
            </li>
        </div>
    )
}