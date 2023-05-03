import React, { useState } from "react";
import "./style/TaskShower.css"
import Api from './Api'






export default function TaskShower(modificado) {
    const [table, setTable] = useState({})


    async function getInfo() {
        const res = await Api.get('/cards')
       
        setTable((res.data))
    }

    //function hideCreator(modificado) {
    //    console.log(`aqui o modificado ${modificado}`)
    //}



    function showCard(data) {
        const chaves = Object.keys(data).reverse()

        return (chaves.map((chave) => {
            const linha = data[chave]

            return (<card-task
                key={linha.id_card}
                titulo={linha.nome}
                rating={linha.rating}
                duration={linha.duracao}
                usuario={linha.usuario}
                foto={linha.img}
                
                    ></card-task>)

            })
        )

    }

  



    return (
        <div id="task-shower">
            <div id="button-container">
                <button onClick={() => getInfo()}>MOSTRAR CARTAS</button>
            </div>
            <div id="shower-container">
                <div className="shower">
                    {showCard(table)}
                </div>
            </div>
        </div>
      )



}