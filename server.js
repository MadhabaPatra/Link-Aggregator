var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('views'));
var PORT=process.env.PORT || 9000;
app.get('/', function (req, res) {
   console.log('working');
     res.render('homepage',{
   } );
})
app.get('/:id', function (req, res) {
   console.log('working');
   //res.send('your id is : '+req.params.id);
      if(req.params.id=='404')
        {
         res.render('404',{
      id:req.params.id
   } );
           }
   res.render('userpage',{
      id:req.params.id
   } );
})

app.get('/:id/:sid', function (req, res) {
   console.log('is working');
   //res.send('your id is : '+req.params.id);
      if(req.params.id=='404')
        {
         res.render('404',{
      id:req.params.id
   } );
           }
   res.render('social',{
      id:req.params.id,sid:req.params.sid
   } );
})
app.listen(PORT);
/*var server = app.listen(8081, function () {*/
   /*var host = server.address().address*/
   /*var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})*/
