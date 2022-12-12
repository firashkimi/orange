const express = require('express')
require('./configuration/connexionMongo')
const itemRoutes = require('./routes/ItemRoutes')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')

const app = express()

const port = 4000

app.use(cors());
app.use(express.json())
app.use(itemRoutes)
app.use(userRoutes)

app.listen(port, () => { console.log(`Server is running on port ${port}`) })

