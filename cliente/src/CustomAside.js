import React from "react"
import "./style/CustomAside.css"


export default function CustomAside() {

    return (
        <aside>
            <div className="dica">
                <h3>Busque a imagem no google</h3>
                <img src={require("./img/printCapi.png")} />
            </div>
            <div className="dica">
                <h3>copie o caminho da imagem</h3>
                <img src={require("./img/capiSolitaria.png")} />
            </div>
            <div className="dica">
                <h3>Cole no input da imagem &#8594;</h3>
            </div>

        </aside>



        )


}
