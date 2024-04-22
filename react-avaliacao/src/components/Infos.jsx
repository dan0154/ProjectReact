import React from "react";
import "../style/style.css";

export default function Infos({title, description, time, local, imgSrc}){
    return(
        <div className="infos">
            <div className="infosText">
                <div className="infosTitle">
                    <h2>{title}</h2>
                    <hr></hr>
                </div>
                <div className="infosDetails">
                    <p>{description}</p>
                    <p>{time}</p>
                    <p>{local}</p>
                </div>
            </div>
            <div className="infosImage">
                <img src={imgSrc}></img>
            </div>
        </div>
    )
}