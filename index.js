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

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>This is the /r/${subreddit} subreddit</h1>`)
})
app.get('/r/:subreddit/:postid', (req, res) => {
    const { subreddit, postid } = req.params;
    res.send(`<h1>This is the /r/${subreddit} subreddit</h1>
              <p>Viewing postID: ${postid}</p>`)
})

app.get('/search', (req, res) => {
    console.log(req.query);
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED');
    } else {
        res.send(`Hi! Your request is ${q}`);
    }
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

//This should come last because it will override the other routes.
//Routes are matched in order from top to bottom!
app.get('*', (req, res) => {
    res.send('I don\'t know that path!!')
})




app.listen(3000, () => {
    console.log("Listening on port 3000");
})