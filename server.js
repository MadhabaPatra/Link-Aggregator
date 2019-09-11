var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('views'));
app.get('/linkc/:id', function (req, res) {
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
}).listen(9000 , () => console.log('Example app listening on port 9000!'))


/*var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
*/
