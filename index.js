const express = require('express') 
const app = express()
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3005

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    queries.listAll().then(response => res.send(response))
})

app.get('/:id', (req, res) => {
    let id = req.params.id
    queries.getById(id).then(response => res.send(response))
})

app.post('/', (req, res) => {
    queries.createSnack(req.body).then(response => res.send(response[0]))
})

app.delete('/:id', (req, res) => {
    let id = req.params.id
    queries.deleteSnack(id).then(res.sendStatus(204))
})

app.put('/:id', (req, res) => {
    let id = req.params.id
    let body = req.body 
    queries.updateSnack(id, body).then(data => res.json(data[0]))
})

app.use((req, res, next) => {
    res.status(404).json({ error: { message: 'data not found' }})
})
 
 app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err})
})

app.listen(port)