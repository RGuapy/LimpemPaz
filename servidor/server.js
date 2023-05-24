const express = require('express')
const cors = require('cors')
const json = require('json')
const database = require('./database') 

const db = database.db
const app = express()

app.use(cors())
app.use(express.json())

app.get('/cardsFight', (req, res) => {
    db.query(`select * from taskcards where id_card= ${req.query.selecionado};`, (err, consulta) => {
        res.send(consulta)
    })
})

app.get('/cards', (req, res) => {
    db.query("select * from taskcards;", (err, consulta) => {
        console.log("entrougetinfo")
        res.send(consulta)
    })
})


app.post('/cards', (req, res) => {
    console.log(req.body)
    const dt = req.body
    const qry = "insert into taskcards(nome,img,rating,duracao,usuario) values(?,?,?,?,?);"
    db.query(qry, [dt.nome, dt.img, dt.rating, dt.duracao, dt.usuario], (err, res) => {
       
        (typeof err == 'undefined') ? console.log('erro') : console.log(res)



})
})


app.listen(5050,()=>console.log('escutando'))