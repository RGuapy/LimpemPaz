import React, { useState } from "react"
import "./style/TaskCreator.css"
import Api from './Api'
import CardTask from "./componentes/componentesCards"


export default function TaskCreator() {
    const [task, setTask] = useState({})
    const api = new Api()

    function changeInput(e) {
        setTask(anterior =>( {
            ...anterior,  [e.target.name]: e.target.value }))
    }

    //function createCard() {
        
    //}

    return (
           

        <div id="formulario">
            <div className="form-item" id="titulo">
                <h2>Crie uma Carta:</h2>
            </div>
                <div className = "form-item">
                    <label>Nome:</label> 
                    <br/>
                    <input name="nome" type="text" onChange={(e) => changeInput(e)} />
                </div>  

                <div className="form-item">
                    <label>Usuario:</label>
                    <br />
                    <input name="usuario" type="text" onChange={(e) => changeInput(e)} />
                </div>
           

                <div className="form-item">
                    <label>Rating:</label>
                    <br />
                    <input value="1"  name="rating" type="radio" onChange={(e) => changeInput(e)} />
                    <input value="2"  name="rating" type="radio" onChange={(e) => changeInput(e)} />
                    <input value="3"  name="rating" type="radio" onChange={(e) => changeInput(e)} />
                    <input value="4" name="rating" type="radio" onChange={(e) => changeInput(e)} />
                    <input value="5" name="rating" type="radio" onChange={(e) => changeInput(e)} />
                </div>

                <div className="form-item">
                    <label>Duracao:</label>
                    <br />
                    <input name="duracao" type="time" onChange={(e) => changeInput(e)} />
                </div>   


           
                <div className="form-item">
                    <label>Imagem:</label>
                <br />
                <textarea placeholder="coloque o link de uma imagem do google" name="img" onChange={(e) => changeInput(e)} />
            </div>
                
            <button onClick={() => {
                api.api.post('/cards', task)
                console.log(task)
            }
            }>enviar</button>
            
            
            </div>

        )
}