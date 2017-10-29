var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
app.use(express.static('server/public'));
app.use(bodyParser.json());

var pictures = [{ picture: 'pictures/India.jpg', caption: "Blake and I at the Taj Mahal", likes: 0, hidden: true, comments: [], }, { picture: 'pictures/Lucy.jpg', caption: "The lovely Lucy", likes: 0, hidden: true, comments: [] }, { picture: 'pictures/Fam.jpg', caption: "My family on vacation in Venice", likes: 0, hidden: true, comments: [] }, { picture: 'pictures/Morocco.jpg', caption: "Riding Camels in Morocco", likes: 0, hidden: true, comments: [] }, { picture: 'pictures/Shadow.jpg', caption: "Shadow as a goofy kitten", likes: 0, hidden: true, comments: [] }, { picture: 'pictures/jellyfish.jpg', caption: "I love the Omaha Zoo", likes: 0, hidden: true, comments: [] }];

//picture post route
app.post('/pictures', function(req, res){
    console.log(req.body);
    var newPicture = req.body;
    pictures.push(newPicture);
    console.log(pictures);
    res.sendStatus(201);
});

app.get('/pictures', function(req, res){
    res.send(pictures);
});

app.listen(port, function(){
    console.log('listening on port: ', port);
});