import React from "react";
import "../styles/styles.css"

export default function Header(){
    return(
        <header className="Header">
            <h1>Ferrari Gallery</h1>
            <div className="logo">
                <img src="https://logos-world.net/wp-content/uploads/2020/07/Ferrari-Scuderia-Logo.png" alt="" />
            </div>
        </header>
    )
}