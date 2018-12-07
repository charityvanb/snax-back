const express = require('express') 
const app = express()
let port = process.env.PORT || 3005

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port)