const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')

const PORT = process.env.PORT || 3000

const app = express()


app.listen(PORT, console.log(`http server listening on port ${PORT}`))