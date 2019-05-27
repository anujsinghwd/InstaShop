const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const posts = require('./routes/api/posts');
/*const Instafeed = require("instafeed.js");
const path = require('path');*/
/*
const feed = new Instafeed({
    get: 'popular',
    clientId: '8a28ba0ccbf4446a8239ba657beef432',
    resolution: 'standard_resolution'
});

feed.run();
*/



const app = express();
app.use(cors());
//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Use Routes
app.use('/api/posts', posts);

const PORT =  process.env.PORT || 5000;
/*
app.use(express.static(path.join(__dirname, 'index.html')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
*/

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
