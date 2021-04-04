const express = require('express');
const app = express()


// app.use((req, res) => {
//     console.log("NEW REQUEST!");
//     res.send("<h1>This is your response!</h1>");
// })

 
app.get('/', (req, res) => {
    res.send('<h1>Welcome to our home page!</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact us!</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1>');
});

app.post('/about', (req, res) => {
    res.send('POST REQUEST ON /about (This is different than a get request!');
});


app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit! </h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit! </h1>`);
});


app.get('*', (req, res) => {
    res.send("I don't know that route");
});


app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!");
})

