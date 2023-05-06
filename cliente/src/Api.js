import axios from "axios"



export default class Api{
    constructor(){
        this.api = axios.create({

            baseURL: "http://localhost:5050/"
            })
        }
        
    

    async getInfo(genericSet) {
        const res = await this.api.get('/cards')
       
        genericSet((res.data))
    }


    async getCard(genericSet,listaRandom) {
        let id = listaRandom[parseInt(Math.random() * listaRandom.length-1)]
        const res = await this.api.get('/cardsFight',{params: {selecionado:id}})
       
        genericSet((res.data))
        //setAle(parseInt(Math.random() * card.length))

    }



}