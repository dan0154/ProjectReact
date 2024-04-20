export default function Image({Imagem, alt}){
    return(
        <div className="Image">
            <img src={Imagem} alt={alt}></img>
        </div>
    )
}