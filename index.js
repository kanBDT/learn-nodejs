const express = reqiore('express')
const app = express()

app.get('/', (req, res) => {
  res.send({ hi: 'there'})
})

const PORT = process.env.PORT
app.listen(PORT)
