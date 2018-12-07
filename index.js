const express = require('express') 
const app = express()
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')
const database = require('./database-connection')
const port = process.env.PORT || 3005

app.use(bodyParser.json())
app.use(cors())

app.options('/', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.end();
  });

app.get('/', (req, res) => {
    queries.listAll().then(response => res.send(response))
})

app.get('/users', (req, res) => {
    queries.listAllUsers().then(response => res.send(response))
})

app.get('/reviews', (req, res) => {
    queries.listAllReviews().then(response => res.send(response))
})

// app.get('/reviews', (req, res) => {
//     database('reviews')
//     .join('users', 'users.id', '=', reviews.user_id)
//     .then(function(data) {
//         res.json(data)
//     })
// })

app.get('/:id', (req, res) => {
    let id = req.params.id
    queries.getById(id).then(response => res.send(response))
})

app.get('/users/:id', (req, res) => {
    let id = req.params.id
    queries.getByIdUsers(id).then(response => res.send(response))
})

app.get('/reviews/:id', (req, res) => {
    let id = req.params.id
    queries.getByIdReviews(id).then(response => res.send(response))
})

app.post('/', (req, res) => {
    queries.createSnack(req.body).then(response => res.send(response[0]))
})

app.post('/users', (req, res) => {
    queries.createUser(req.body).then(response => res.send(response[0]))
})

app.post('/reviews', (req, res) => {
    queries.createReview(req.body).then(response => res.send(response[0]))
})

app.delete('/:id', (req, res) => {
    let id = req.params.id
    queries.deleteUser(id).then(res.sendStatus(204))
})

app.delete('/users/:id', (req, res) => {
    let id = req.params.id
    queries.deleteUser(id).then(res.sendStatus(204))
})

app.delete('/reviews/:id', (req, res) => {
    let id = req.params.id
    queries.deleteReview(id).then(res.sendStatus(204))
})

app.put('/:id', (req, res) => {
    let id = req.params.id
    let body = req.body 
    queries.updateSnack(id, body).then(data => res.json(data[0]))
})

app.put('/users/:id', (req, res) => {
    let id = req.params.id
    let body = req.body 
    queries.updateUser(id, body).then(data => res.json(data[0]))
})

app.put('/reviews/:id', (req, res) => {
    let id = req.params.id
    let body = req.body 
    queries.updateReview(id, body).then(data => res.json(data[0]))
})

app.use((req, res, next) => {
    res.status(404).json({ error: { message: 'data not found' }})
})
 
 app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err})
})

app.listen(port)