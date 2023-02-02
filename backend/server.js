const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send("Server is running by the way")
})

app.listen(5000, () => {
    console.log("Server listening on 5000...")
})