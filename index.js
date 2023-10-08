const express = require("express");
const app = express();

//Express provides request and response objects in the callback
// app.use((req, res) => {
//     console.log("We got a new request!");
//     res.send("Hello, we got your request!")
// })


//Only matching get requests
//Path routing to specific animal returns a specific request
app.get('/', (req, res) => {
    res.send('This is the homepage!!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.post('/cats', (req, res) => {
    res.send('Post request to /cats, this is different from a GET request!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!!')
})




app.listen(3000, () => {
    console.log("Listening on port 3000");
})