import axios from "axios"

const Api = axios.create({

    baseURL: "http://172.17.20.47:5000/"
    })


export default Api

