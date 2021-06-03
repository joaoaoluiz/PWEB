const express = require('express')
const consign = require('consign')
const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.set('views', 'app/views')
app.set('view engine', 'ejs')

consign({ cwd: 'app' })
    .include('routes')
    .then('models')
    .then('config/dbConnection.js')
    .into(app);

module.exports = app