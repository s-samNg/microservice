require('dotenv').config()
const app = require("./app.js")

const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

