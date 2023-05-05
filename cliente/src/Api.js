import axios from "axios"

const Api = axios.create({

    baseURL: "http://10.0.1.100:5000/"
    })


export default Api

