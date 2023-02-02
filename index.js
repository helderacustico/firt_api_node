const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.json())
app.use(cors())
let db = [
    { '1': {nome: 'Helder', idade: '28'} },
    { '2': {nome: 'Alisson', idade: '23'} },
    { '3': {nome: 'Pedro', idade: '18'} }
]

// buscar dados
app.get('/', (req, res) => {
    return res.json(db)
})

// inserir dados
app.post('/adicionar', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})

app.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
            return item

    })
})

app.listen(21262, () => {
    console.log('Express started at http://localhost:21262')
})
