import "./style/Arena.css"
import React from "react";
import CustomHeader from "./CustomHeader"
import Deck from "./Deck"

export default function Arena(){


    return(
        <div id="principal">
            <CustomHeader />
            <div id="tela-container">
                <div id="tela">
                    <Deck/>
                </div>
            </div>
        </div>
        

    )
}