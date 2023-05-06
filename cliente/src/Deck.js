import React,{useState} from "react"
import Api from './Api'

export default function Deck(){
    const [card, setcard] = useState({})
    //const [ale, setAle] = useState(0)
    const api = new Api()




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





    return(
        <>
        
        <button onClick={()=>{api.getCard(setcard)}}>Pegar card</button>
        <div>
            {showCard(card)}
        </div>
        </>
    )
}