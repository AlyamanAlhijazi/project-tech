const express = require("express")
const app = express()
const port = 3000
app.get('/', function (req, res){
    res.send("hello wereld")
})
 
app.get('/about', function (req, res){
    res.send("hello about")
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
  });

app.set('view engine', 'ejs')
   .set('views', 'view')

function movie(req, res, next){
    let movie={
        title:'Blade runner',
        description: 'who cares about the description'
    }
    res.render('detail.ejs', {data: movie})
}