import React from "react"
import "./style/CustomHeader.css"



export default function CustomHeader(){

    return(
        <header>
            <h1>Limpempaz</h1>
            
            <div id="navegador">
                <nav>
                    <ul>
                        <li><a href="http://localhost:3000/" >HOME</a></li>
                        <li><a href="http://localhost:3000/Arena">ARENA</a></li>
                        <li><a>CARDS</a></li>
                        <li><a>PERFIL</a></li>
                        <li><a>CONFIG</a></li>

                    </ul>
                </nav>
            </div>

        </header>



    )




}