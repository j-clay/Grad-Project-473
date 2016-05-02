var express     = require('express');
var app         = express();
var path        = require('path');
var bodyParser  = require('body-parser')
var fs          = require('fs');

var workout_list = path.join(__dirname, '/public/workouts.json')



app.get('/list', function(req, res) {
   
    fs.readFile(workout_list, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
    });
});
app.listen(3000);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));