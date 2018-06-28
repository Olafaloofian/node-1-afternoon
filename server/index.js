const express = require('express')
const bodyParser = require('body-parser')
const bC = require(__dirname + '/controllers/messages_controller')

const app = express()
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../public/build'))

const PORT = 3000
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))

app.get('/api/messages', bC.read)

app.post('/api/messages', bC.create)

app.put('/api/messages/:id', bC.update)

app.delete('/api/messages/:id', bC.delete)