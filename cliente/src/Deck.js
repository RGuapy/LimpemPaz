import React,{useState} from "react"
import Api from './Api'

export default function Deck(){
    
    const [table, setTable] = useState({})
    const [ale, setAle] = useState(0)


    async function getInfo() {
        const res = await Api.get('/cards')
       
        setTable((res.data))
        setAle(parseInt(Math.random() * table.length))

    }

    return(
        <>
        <h1>{ale}</h1>
        <button onClick={()=>{getInfo()}}>Dar o Deck</button>
        </>
    )
}