import React from "react";
import "../style/style.css";

export default function Footer({name, schoolClass}){
    return(
        <div className="footer">
            <p>{name}, {schoolClass}</p>
        </div>
    )
}