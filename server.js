const express = require("express")
const app = express()
const port = 3000

// app.get('/', function (req, res){
//     res.send("hello wereld")
// })
 
// app.get('/about', function (req, res){
//     res.send("hello about")
// })


// Zet de view engine naar EJS
app.set('view engine', 'ejs')
app.set('views', 'view')

// Dummy data voor films
const movies = [
    {id: 1, title: 'blade Runner', description: 'Sci-fi classic about AI and humanity'},
    {id: 2, title: 'Inception', description: 'A thief enters dreams to steal secrets'},
    {id: 3, title: 'Interstaller', description: 'A space adventure to save humanity'}
]

// Homepagina met lijst van films
app.get('/', (req, res) => {
    res.render('index', {movies})
})

// Detailpagina van een specifieke film
app.get('/movie/:id', (req, res) =>{
    let movie = movies.find( m => m.id == req.params.id)
    if (movie){
        res.render('detail', {movie})
    }
    else {
        res.status(404).send('film niet gevonden')
    }
})


// about pagina
app.get('/about', (req, res) => {
    res.render('about')
})

// function movie(req, res, next){
//     let movie={
//         title:'Blade runner',
//         description: 'who cares about the description'
//     }
//     res.render('detail.ejs', {data: movie})
// }

// app.get('/movie', movie)

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
  });