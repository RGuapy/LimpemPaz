import React,{useState} from "react"
import Api from './Api'

export default function Deck(){
    const [table, setTable] = useState({})
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

    function getIdsTable(table){
        let ids = []
        let chaves = Object.keys(table)
        chaves.map((chave) => {
            ids.push(table[chave].id_card)
        })
        return ids
    }

    function generateDeck(){
        api.getInfo(setTable)
        api.getCard(setcard,getIdsTable(table))
    }



    return(
        <>
        
        <button onClick={()=>generateDeck()}>Pegar card</button>
        <div>
            {showCard(card)}
        </div>
        </>
    )
}