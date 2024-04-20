import React from "react";
import Image from "./Image";
import "../styles/styles.css"

export default function Gallery(){
    return(
        <div className="Gallery">
            <Image Imagem={"12.jpg"} alt={"13"}></Image>
            <Image Imagem={"13.jpg"} alt={"13"}></Image>
            <Image Imagem={"https://www.speedsport-magazine.com/media/images/meldeliste/zoom1000/scuderia-ferrari-ferrari-f14-t-raeikkoenen-33584.jpg"} alt={"13"}></Image>
            <Image Imagem={"15.jpg"} alt={"13"}></Image>
            <Image Imagem={"16.jpg"} alt={"13"}></Image>
            <Image Imagem={"17.jpg"} alt={"13"}></Image>
            <Image Imagem={"18.jpg"} alt={"13"}></Image>
            <Image Imagem={"19.jpg"} alt={"13"}></Image>
            <Image Imagem={"20.jpg"} alt={"13"}></Image>
            <Image Imagem={"21.jpg"} alt={"13"}></Image>
            <Image Imagem={"22.jpg"} alt={"13"}></Image>
            <Image Imagem={"23.jpg"} alt={"13"}></Image>
        </div>
    )
}
