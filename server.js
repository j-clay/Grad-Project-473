var express     = require('express');
var app         = express();
var path        = require('path');
var bodyParser  = require('body-parser')
var fs          = require('fs');

//var comments_file = path.join(__dirname, '/public/comments.json')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/comments', function(req, res) {
    fs.readFile(comments_file, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
    });
});
app.listen(3000);