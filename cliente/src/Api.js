import axios from "axios"



export default class Api{
    constructor(){
        this.api = axios.create({

            baseURL: "http://192.168.56.1:5000/"
            })
        }
        
    

    async getInfo(genericSet) {
        const res = await this.api.get('/cards')
       
        genericSet((res.data))
    }


    async getCard(genericSet) {
        let gambi = [56,89,74,6,5]
        let id = gambi[parseInt(Math.random() * gambi.length-1)]
        const res = await this.api.get('/cardsFight',{params: {selecionado:id}})
       
        genericSet((res.data))
        //setAle(parseInt(Math.random() * card.length))

    }



}