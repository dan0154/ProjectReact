import Imagem from "./Imagem"
import Titulo from "./Titulo"

export default function Galeria2(){
    return(
        <div className="Galeria2">
            <Titulo titulo={"Galeria de gatinhos"}></Titulo>
            <div className="ItensGaleria">
                <Imagem Imagem={"150912426359f368a78573a_1509124263_4x3_md.jpg"} alt={"x"}></Imagem>
                <Imagem Imagem={"lulu-capa.jpg"} alt={"x"}></Imagem>
                <Imagem Imagem={"lulu-da-pomerania-2-709x384.jpg"} alt={"x"}></Imagem>
                <Imagem Imagem={"lulu-da-pomerania-caracteristicas-guia-racas.jpg"} alt={"x"}></Imagem>
                <Imagem Imagem={"spitz-alemao-lulu-da-pomerania.jpg"} alt={"x"}></Imagem>
                <Imagem Imagem={"unnamed.jpg"} alt={"x"}></Imagem>
            </div>
        </div>
    )
}