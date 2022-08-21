const express = require('express');
const server = express();
const productsList = require('./baseDate/date.json')


server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./public'))


server.get('/', (req, res) => {
    res.render('products')
})

server.get('/products', (req, res) => {
   res.send(productsList);
   
}) 

server.get('/product/:id',(req,res) => {
   let {id} = req.params
  let  product = productsList[id]
   res.render('product',{product})
})


server.listen(3001);

